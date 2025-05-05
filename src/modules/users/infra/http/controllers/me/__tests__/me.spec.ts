import { NextFunction, Request, Response } from 'express';

import container from '@shared/container';

import { loginBodyRequest } from '../../login/__tests__/login.mocks';
import { loginRequest } from '../../login/__tests__/login.request';
import { signUpBodyRequest } from '../../sign-up/__tests__/sign-up.mocks';
import { signUpRequest } from '../../sign-up/__tests__/sign-up.request';
import MeController from '../me.controller';
import { meRequest } from './me.request';

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

  it('should call next with error if listUserUseCase throws', async () => {
    const fakeError = new Error('Simulated failure');

    const req = {
      user: { id: 'user_id' },
    } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const next: NextFunction = jest.fn();

    jest.spyOn(container, 'getAsync').mockResolvedValueOnce({
      execute: jest.fn().mockRejectedValue(fakeError),
    });

    const controller = new MeController();
    await controller.list(req, res, next);

    expect(next).toHaveBeenCalledWith(fakeError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
