const axios = require('axios');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static('public'));

server.get('/', (_req, res) => {
  res.send('ejgvhjbdfaasgguhklmkress!');
});


server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
