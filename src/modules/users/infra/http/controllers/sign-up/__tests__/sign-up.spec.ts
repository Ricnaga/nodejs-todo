import { signUpRequest } from './sign-up.request';

describe('USERS -> Sign-Up', () => {
  it('should be able to create a new user', async () => {
    const response = await signUpRequest();

    expect(response.statusCode).toBe(204);
  });

  it('should not be able to create the same user', async () => {
    await signUpRequest();

    const response = await signUpRequest();

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
