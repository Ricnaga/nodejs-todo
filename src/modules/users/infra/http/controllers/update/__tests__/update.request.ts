import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { UpdateBodyRequest, UpdateParamsRequest } from '../update.schema';

interface IUpdateRequest extends UpdateParamsRequest, UpdateBodyRequest {
  token: string;
}

export const updateRequest = async (data: IUpdateRequest) => {
  const { token, id, ...rest } = data;

  const response = await request(app)
    .put('/users/:id'.replace(':id', id))
    .send(rest)
    .set('authorization', `Bearer ${token}`);

  return response;
};
