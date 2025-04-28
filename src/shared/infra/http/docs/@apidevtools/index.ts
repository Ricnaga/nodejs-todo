import swaggerParser from '@apidevtools/swagger-parser';
import { serve, setup } from 'swagger-ui-express';

import { Application } from 'express';

const swaggerPath = process
  .cwd()
  .concat('/src/shared/infra/http/docs/@apidevtools/swagger.yaml');

// https://swagger.io/docs/specification/v3_0/basic-structure/

const initSwaggerApiDevTools = async (app: Application) => {
  try {
    const swaggerDocument = await swaggerParser.validate(swaggerPath);

    app.use('/swagger', serve, setup(swaggerDocument));
  } catch (error) {
    console.error('Erro ao validar Swagger:', error);
    process.exit(1);
  }
};

export const initDocsServer = initSwaggerApiDevTools;
