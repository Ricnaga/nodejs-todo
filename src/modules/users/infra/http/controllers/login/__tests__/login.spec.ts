import { loginRequest } from './login.request';
import { signUpRequest } from '../../sign-up/__tests__/sign-up.request';

describe('USERS -> Login', () => {
  beforeAll(async () => {
    await signUpRequest();
  });

  it('should be able to create a new token', async () => {
    const response = await loginRequest();

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('should not be able to create a new token when the user does not exists', async () => {
    const response = await loginRequest({
      password: 'wrong_password',
      username: 'wrong_username',
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
