import { type Response } from 'supertest';

import { signUpBodyRequest } from './sign-up.mocks';
import { signUpRequest } from './sign-up.request';

describe('USERS -> Sign-Up', () => {
  let signUpResponse: Response;

  beforeAll(async () => {
    signUpResponse = await signUpRequest(signUpBodyRequest);
  });

  it('should be able to create a new user', async () => {
    expect(signUpResponse.statusCode).toBe(204);
  });

  it('should not be able to create the same user', async () => {
    const response = await signUpRequest(signUpBodyRequest);

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
