import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorMiddleware } from '@middlewares';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorMiddleware.handle);

export { app };
