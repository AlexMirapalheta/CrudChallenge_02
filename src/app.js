const express = require('express');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    console.log('[APP] AppController Loaded');
  }

  middlewares() {
    this.express.use(express.json());
    console.log('[APP] AppController Middleware Loaded');
  }

  routes() {
    this.express.use(require('./app/router/routes'));
    console.log('[APP] AppController Routes Loaded');
  }
}

module.exports = new AppController().express;
