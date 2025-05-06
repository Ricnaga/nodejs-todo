import { mockTodosRepository } from '@modules/todos/repositories/__mocks__/todos.repository.mocks';

import { mockHashProvider } from '@shared/container/providers/HashProvider/__mocks__/hash-provider.mocks';
import AppError from '@shared/errors/app.error';

import { mockCreateTodo } from './create-todo.mocks';
import CreateTodoUseCase from '../create-todo.use-case';

describe('USE-CASE -> Create Todo', () => {
  let createTodoUseCase: CreateTodoUseCase;

  beforeAll(() => {
    createTodoUseCase = new CreateTodoUseCase(mockTodosRepository);
  });

  it('should create a new todo', async () => {
    await createTodoUseCase.execute(mockCreateTodo);

    expect(mockTodosRepository.create).toHaveBeenCalledWith({
      todo: mockCreateTodo,
    });
  });

  it('should throw an error if the user ID does not exists', async () => {
    await expect(
      createTodoUseCase.execute({ ...mockCreateTodo, userId: undefined }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
