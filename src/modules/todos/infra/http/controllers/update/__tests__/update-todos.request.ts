import request from 'supertest';

import { app } from '@shared/infra/http/app';

import {
  UpdateTodoBodyRequest,
  UpdateTodoParamsRequest,
} from '../update-todos.schema';

interface IUpdateTodoRequest
  extends UpdateTodoParamsRequest,
    UpdateTodoBodyRequest {
  token: string;
}

export const updateTodoRequest = async (data: IUpdateTodoRequest) => {
  const { id, token, ...rest } = data;

  const response = await request(app)
    .put('/todos/:id'.replace(':id', id))
    .send(rest)
    .set('authorization', `Bearer ${token}`);

  return response;
};
