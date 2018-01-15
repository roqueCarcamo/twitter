"use strict";

const express = require("express");
const morgan = require("morgan");
const logger = require("winston");
const bodyParser = require('body-parser');

const api = require("./twitter/v1");

const app = express();
// Setup middleware
app.use(morgan("common"));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

// Setup router and routes
app.use("/twitter", api);
app.use("/twitter/v1", api);

app.use( (req, res, next) => {
  logger.info("Route not found");
  res.status(404);
  res.json({
    "error": "Error. Route not found"
  });
});

app.use( (err, req, res, next) => {
  logger.error("Error");
  res.status(500);
  res.json({
    "error": `${err}`
  });
});

module.exports = app;