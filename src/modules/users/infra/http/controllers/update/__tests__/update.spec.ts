import { NextFunction, Request, Response } from 'express';

import container from '@shared/container';

import { loginBodyRequest } from '../../login/__tests__/login.mocks';
import { loginRequest } from '../../login/__tests__/login.request';
import { meRequest } from '../../me/__tests__/me.request';
import { signUpBodyRequest } from '../../sign-up/__tests__/sign-up.mocks';
import { signUpRequest } from '../../sign-up/__tests__/sign-up.request';
import UpdateController from '../update.controller';
import { updateUserBodyRequest } from './update.mocks';
import { updateRequest } from './update.request';

describe('USERS -> Update by User ID', () => {
  let token: string;
  let userId: string;

  beforeAll(async () => {
    const response = await signUpRequest(signUpBodyRequest).then(async () => {
      const { body } = await loginRequest(loginBodyRequest);

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
      ...updateUserBodyRequest,
      id: userId,
      token,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.user).toHaveProperty('id');
  });

  it('should not be able to update user data', async () => {
    const response = await updateRequest({
      ...updateUserBodyRequest,
      id: 'wrong_id',
      token,
    });

    expect(response.statusCode).toBe(500);
  });

  it('should call next with error if updateUserUseCase throws', async () => {
    const fakeError = new Error('Simulated failure');

    const req = {
      body: updateUserBodyRequest,
      params: { id: userId },
      user: { id: 'user_id' },
    } as unknown as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const next: NextFunction = jest.fn();
    jest.spyOn(container, 'getAsync').mockResolvedValueOnce({
      execute: jest.fn().mockRejectedValue(fakeError),
    });

    const controller = new UpdateController();
    await controller.update(req, res, next);

    expect(next).toHaveBeenCalledWith(fakeError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
