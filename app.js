const express = require('express')
const { setupLogging } = require("./src/logging");
const { ROUTES } = require("./src/routes");
const { setupProxies } = require("./src/proxy");
const { setupAuth } = require("./src/auth");

const app = express()

setupProxies(app, ROUTES);
setupLogging(app);
setupAuth(app, ROUTES);

module.exports = app