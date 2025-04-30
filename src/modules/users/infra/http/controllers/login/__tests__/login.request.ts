import request from 'supertest';

import { app } from '@shared/infra/http/app';

import { signUpBodyRequest } from '../../sign-up/__tests__/sign-up.request';
import { LoginBodyRequest } from '../login.schema';

export const loginBodyRequest: LoginBodyRequest = {
  username: signUpBodyRequest.username,
  password: signUpBodyRequest.password,
};

export const loginRequest = async (
  data: LoginBodyRequest = loginBodyRequest,
) => {
  const response = await request(app).post('/users/login').send(data);

  return response;
};
