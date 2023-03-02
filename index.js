const axios = require('axios');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static('public'));

server.get('/', (_req, res) => {
  res.send('Hello Expkldfasgdfdhdfas5467gguhsadfasklmkjkjgvhkglhujlmress!');
});


server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
