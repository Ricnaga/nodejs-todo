import { updateBodyRequest, updateRequest } from './update.request';
import { loginRequest } from '../../login/__tests__/login.request';
import { meRequest } from '../../me/__tests__/me.request';
import { signUpRequest } from '../../sign-up/__tests__/sign-up.request';

describe('USERS -> Update', () => {
  let token: string;
  let userId: string;

  beforeAll(async () => {
    const response = await signUpRequest().then(async () => {
      const { body } = await loginRequest();

      return body;
    });

    const user = await meRequest(response.token).then(
      (result) => result.body.user,
    );

    token = response.token;
    userId = user.id;
  });

  it('should be able to update user data', async () => {
    const response = await updateRequest({
      ...updateBodyRequest,
      id: userId,
      token,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.user).toHaveProperty('id');
  });

  it('should not be able to update user data', async () => {
    const response = await updateRequest({
      ...updateBodyRequest,
      id: 'wrong_id',
      token,
    });

    expect(response.statusCode).toBe(500);
  });
});
