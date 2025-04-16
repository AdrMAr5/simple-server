const axios = require("axios");
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3300;

server.use(express.static("public"));
server.get("/", (_req, res) => {
  console.log("app got an request on / path");
  res.send("Hello Expkldfasgdfdhdfasgguhklmkjkjkhjnlkgvhkglhujlmress!");
});
server.get("/test", (_req, res) => {
  console.log("app got an request on /test path");
  res.send("Hello test!");
});

server.get("/", (_req, res) => {
  process.stdout.write("Hello_" + _req.query.id);
  res.send("Hello Express from bbapp 2!");
  process.stdout.write("FINDT-TEST process stdout");
  process.stderr.write("FIND-IT-TEST process stdout");
  console.log("aaa test");
  console.error("FIND-IT-TEST console error");
});
server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
