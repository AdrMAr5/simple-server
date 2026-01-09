const axios = require('axios');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static('public'));

// Helper to generate a string of a specific size (in MB)
const generateLargeString = (sizeInMB) => {
    return 'X'.repeat(sizeInMB * 1024 * 1024);
};

server.get('/', (_req, res) => {
  console.log('app got an request on / path');
  res.send('Hello Expklddfdhdffghhsklaaasdmdjaakaasa!');
});

/**
 * SCENARIO 1: The "Single Monster Log"
 * This generates a single log line ~11MB.
 * This should trigger the Stackdriver "Request payload size exceeds the limit" 
 * immediately, regardless of batch size.
 */
server.get('/error-single', (_req, res) => {
    const hugeData = generateLargeString(11); 
    console.log(JSON.stringify({ message: "Single huge log", data: hugeData }));
    res.send('Sent one 11MB log line.');
});

/**
 * SCENARIO 2: The "Batch Overflow"
 * We send 50 logs, each 300KB. 
 * Total batch = 15,000KB (~15MB).
 * Since your batch size is 50, Logstash will group these together and 
 * Stackdriver will reject the whole batch for being > 10MB.
 */
server.get('/error-batch', (_req, res) => {
    const logCount = 50;
    const sizePerLogKB = 300;
    const data = 'Y'.repeat(sizePerLogKB * 1024);

    for (let i = 0; i < logCount; i++) {
        console.log(`Batch log ${i}: ${data}`);
    }
    res.send(`Sent ${logCount} logs of ${sizePerLogKB}KB each.`);
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
