const axios = require('axios');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static('public'));

server.get('/', (_req, res) => {
  console.log('app got an request on / path');
  res.send('Hello Expklddfdhdffghhsklaaasdmdjaakaasa!');
});

server.get('/test', (_req, res) => {
  console.log('app got an request on /test path');
  res.send('Hello test!');
});

// --- New Health Check Endpoint ---
server.get('/api/healthz', (_req, res) => {
  console.log('Health check requested');
  // Returns 200 OK with a JSON object
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime() 
  });
});
// ---------------------------------

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
