import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { LoginBodyRequest } from '../login.schema';

export const loginRequest = async (data: LoginBodyRequest) => {
  const response = await request(app).post('/users/login').send(data);

  return response;
};
