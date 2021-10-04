const { Router } = require('express');
const city = require('./city.routes');
const client = require('./client.routes');

module.exports = (server) => {
  server.use((req, res, next) => {
    city(server, new Router());
    client(server, new Router());
    next();
  });
};
