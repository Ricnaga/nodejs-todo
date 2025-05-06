import { mockTodosRepository } from '@modules/todos/repositories/__mocks__/todos.repository.mocks';

import AppError from '@shared/errors/app.error';

import ListTodosUseCase from '../list-todo.use-case';
import { mockListTodo } from './list-todo.mocks';

describe('USE-CASE -> List Todo', () => {
  let listTodosUseCase: ListTodosUseCase;

  beforeAll(() => {
    listTodosUseCase = new ListTodosUseCase(mockTodosRepository);
  });

  it('should list todos', async () => {
    await listTodosUseCase.execute(mockListTodo);

    expect(mockTodosRepository.list).toHaveBeenCalledWith(mockListTodo.userId);
  });

  it('should throw an error if the user ID does not exists', async () => {
    await expect(
      listTodosUseCase.execute({ userId: '' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
