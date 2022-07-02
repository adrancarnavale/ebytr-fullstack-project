import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import 'dotenv/config';

export class AppInstance {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  }
}
