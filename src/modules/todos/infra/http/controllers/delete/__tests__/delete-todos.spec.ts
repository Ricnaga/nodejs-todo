import { NextFunction, Request, Response } from 'express';

import { loginBodyRequest } from '@modules/users/infra/http/controllers/login/__tests__/login.mocks';
import { loginRequest } from '@modules/users/infra/http/controllers/login/__tests__/login.request';
import { signUpBodyRequest } from '@modules/users/infra/http/controllers/sign-up/__tests__/sign-up.mocks';
import { signUpRequest } from '@modules/users/infra/http/controllers/sign-up/__tests__/sign-up.request';

import container from '@shared/container';

import { createTodoBodyRequest } from '../../create/__tests__/create-todos.mocks';
import { createTodoRequest } from '../../create/__tests__/create-todos.request';
import { listTodoRequest } from '../../list/__tests__/list-todos.request';
import DeleteTodoController from '../delete-todos.controller';
import { deleteTodoRequest } from './delete-todos.request';

describe('Todos -> Create Todo', () => {
  let token: string;
  let todoId: string;

  beforeAll(async () => {
    const response = await signUpRequest(signUpBodyRequest).then(async () => {
      const { body } = await loginRequest(loginBodyRequest);

      return body;
    });

    await createTodoRequest(createTodoBodyRequest, response.token).then(
      async () => {
        const todoResponse = await listTodoRequest(response.token);
        todoId = todoResponse.body.todos[0].id;
      },
    );

    token = response.token;
  });

  it('should be able to delete todo', async () => {
    const response = await deleteTodoRequest({ id: todoId }, token);

    expect(response.statusCode).toBe(204);
  });

  it('should not be able to list a todo when is unauthorized', async () => {
    const response = await listTodoRequest('');

    expect(response.statusCode).toBe(401);
  });

  it('should call next with error if listTodoUseCase throws', async () => {
    const fakeError = new Error('Simulated failure');

    const req = {
      params: {
        id: todoId,
      },
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

    const controller = new DeleteTodoController();
    await controller.delete(req, res, next);

    expect(next).toHaveBeenCalledWith(fakeError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
