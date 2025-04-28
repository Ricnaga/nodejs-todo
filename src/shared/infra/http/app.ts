import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';

import express from 'express';

import { handleErrors } from '@shared/errors/utils.error';

import { initDocsServer } from './docs/@apidevtools';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

initDocsServer(app);

export { app };
