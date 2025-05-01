import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { SignUpBodyRequest } from '../sign-up.schema';

export const signUpRequest = async (data: SignUpBodyRequest) => {
  const response = await request(app).post('/users').send(data);

  return response;
};
