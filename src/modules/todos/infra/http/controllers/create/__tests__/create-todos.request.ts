import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { CreateTodoBodyRequest } from '../create-todos.schema';

export const createTodoRequest = async (
  data: CreateTodoBodyRequest,
  token: string,
) => {
  const response = await request(app)
    .post('/todos')
    .send(data)
    .set('authorization', `Bearer ${token}`);

  return response;
};
