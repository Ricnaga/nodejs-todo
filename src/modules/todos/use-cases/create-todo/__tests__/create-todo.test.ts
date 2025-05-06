import { mockTodosRepository } from '@modules/todos/repositories/__mocks__/todos.repository.mocks';

import AppError from '@shared/errors/app.error';

import CreateTodoUseCase from '../create-todo.use-case';
import { mockCreateTodo } from './create-todo.mocks';

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
