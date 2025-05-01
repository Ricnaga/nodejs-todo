import { meRequest } from './me.request';
import { loginBodyRequest } from '../../login/__tests__/login.mocks';
import { loginRequest } from '../../login/__tests__/login.request';
import { signUpBodyRequest } from '../../sign-up/__tests__/sign-up.mocks';
import { signUpRequest } from '../../sign-up/__tests__/sign-up.request';

describe('USERS -> Me', () => {
  let token: string;

  beforeAll(async () => {
    const response = await signUpRequest(signUpBodyRequest).then(async () => {
      const { body } = await loginRequest(loginBodyRequest);

      return body;
    });

    token = response.token;
  });

  it('should be able to list user data', async () => {
    const response = await meRequest(token);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('user');
  });

  it('should not be able to list user data when does not have token', async () => {
    const response = await meRequest('wrong_token');

    expect(response.statusCode).toBe(401);
  });
});
