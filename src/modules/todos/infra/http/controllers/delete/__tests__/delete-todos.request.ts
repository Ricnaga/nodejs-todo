import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { DeleteTodoParamsRequest } from '../delete-todos.schema';

export const deleteTodoRequest = async (
  data: DeleteTodoParamsRequest,
  token: string,
) => {
  const response = await request(app)
    .delete('/todos/:id'.replace(':id', data.id))
    .set('authorization', `Bearer ${token}`);

  return response;
};
