const express = require('express');
const routes = require('./app/router/index.routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    routes(this.server);
  }
}

module.exports = new App().server;
