// IMPORT
const express = require('express');
const routes = require('./routes');

// BODY
class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

// EXPORT
module.exports = new App().server;