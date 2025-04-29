import { Application } from 'express';

import { DEFAULT_APIDOCS } from '@config/constants';

import { initApiDocsServer } from './@apidevtools';
import { initJsDocsServer } from './js-docs';

enum DocsServerName {
  'swagger',
  'api-docs',
}

const swaggerServerName = DocsServerName[DEFAULT_APIDOCS];

const initDocsServer = (app: Application) => {
  return DEFAULT_APIDOCS ? initApiDocsServer(app) : initJsDocsServer(app);
};

export { initDocsServer as default, swaggerServerName };
