import request from 'supertest';

import { app } from '@shared/infra/http/app';

export const listTodoRequest = async (token: string) => {
  const response = await request(app)
    .get('/todos')
    .set('authorization', `Bearer ${token}`);

  return response;
};
