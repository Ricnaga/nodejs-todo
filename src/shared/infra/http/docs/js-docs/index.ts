import swaggerJsDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

import { Application } from 'express';

// https://swagger.io/docs/specification/v3_0/basic-structure/

const swaggerOptions = swaggerJsDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs - Todos | Documentation',
      description: 'Todos challenge API Documentation',
      version: '1.0.0',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://github.com/Ricnaga/nodejs-todo/blob/main/LICENSE',
      },
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development server',
      },
    ],
  },
  apis: [process.cwd().concat('/src/shared/infra/http/docs/**/*.doc.ts')],
});

export const initDocsServer = (app: Application) => {
  app.use('/swagger', serve, setup(swaggerOptions));
};
