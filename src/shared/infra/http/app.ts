import 'express-async-errors';
import 'reflect-metadata';

import cors from 'cors';

import express from 'express';

import { handleErrors } from '@shared/errors/error.utils';

import initDocsServer from './docs';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

initDocsServer(app);

export { app };
