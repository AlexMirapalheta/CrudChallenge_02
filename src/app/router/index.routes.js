const { Router } = require('express');
const city = require('./city.routes');

module.exports = server => {
  server.use((req, res, next) => {
    city(server, new Router());
    next();
  })
}