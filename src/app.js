// IMPORT
import express from 'express';
import routes from './routes';

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
export default new App().server;