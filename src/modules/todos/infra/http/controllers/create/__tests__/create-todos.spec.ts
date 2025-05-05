import { NextFunction, Request, Response } from 'express';

import { loginBodyRequest } from '@modules/users/infra/http/controllers/login/__tests__/login.mocks';
import { loginRequest } from '@modules/users/infra/http/controllers/login/__tests__/login.request';
import { signUpBodyRequest } from '@modules/users/infra/http/controllers/sign-up/__tests__/sign-up.mocks';
import { signUpRequest } from '@modules/users/infra/http/controllers/sign-up/__tests__/sign-up.request';

import container from '@shared/container';

import CreateTodoController from '../create-todos.controller';
import { createTodoBodyRequest } from './create-todos.mocks';
import { createTodoRequest } from './create-todos.request';

describe('Todos -> Create Todo', () => {
  let token: string;

  beforeAll(async () => {
    const response = await signUpRequest(signUpBodyRequest).then(async () => {
      const { body } = await loginRequest(loginBodyRequest);

      return body;
    });

    token = response.token;
  });

  it('should be able to create todo', async () => {
    const response = await createTodoRequest(createTodoBodyRequest, token);

    expect(response.statusCode).toBe(204);
  });

  it('should not be able to create a todo when is unauthorized', async () => {
    const response = await createTodoRequest(createTodoBodyRequest, '');

    expect(response.statusCode).toBe(401);
  });

  it('should call next with error if createTodoUseCase throws', async () => {
    const fakeError = new Error('Simulated failure');

    const req = {
      body: createTodoBodyRequest,
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

    const controller = new CreateTodoController();
    await controller.create(req, res, next);

    expect(next).toHaveBeenCalledWith(fakeError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
