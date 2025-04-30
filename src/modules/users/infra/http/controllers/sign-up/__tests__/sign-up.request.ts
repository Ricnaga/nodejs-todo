import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { SignUpBodyRequest } from '../sign-up-schema';

export const signUpBodyRequest: SignUpBodyRequest = {
  email: 'john.doe@email.com',
  username: 'john_doe',
  password: 'Abc_123',
};

export const signUpRequest = async () => {
  const response = await request(app).post('/users').send(signUpBodyRequest);

  return response;
};
