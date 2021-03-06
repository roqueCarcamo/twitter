"use strict";

const app = require("./server");

const config = require('./config');

app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});