import { type Express } from 'express';

import { PORT } from '@config/constants';

import { app } from './app';
import { swaggerServerName } from './docs';

const initServer = (app: Express) => {
  try {
    app.listen(PORT, () =>
      console.log(
        `👀 Server http://localhost:${PORT}/${swaggerServerName} is being watched - 'Quis custodiet ipsos custodes? 🤔'!`,
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

initServer(app);
