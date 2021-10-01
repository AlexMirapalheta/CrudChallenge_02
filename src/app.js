const express = require('express');
const routes = require('./app/index.routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();

    console.log('[APP] AppController Loaded');
  }

  middlewares() {
    this.server.use(express.json());
    console.log('[APP] AppController Middleware Loaded');
  }

  routes() {
    routes(this.server);
    console.log('[APP] AppController Routes Loaded');
  }
}

module.exports = new App().express;
