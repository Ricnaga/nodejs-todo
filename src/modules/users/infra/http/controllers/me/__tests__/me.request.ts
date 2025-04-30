import request from 'supertest';

import { app } from '@shared/infra/http/app';

export const meRequest = async (token: string) => {
  const response = await request(app)
    .get('/users/me')
    .set('authorization', `Bearer ${token}`);

  return response;
};
