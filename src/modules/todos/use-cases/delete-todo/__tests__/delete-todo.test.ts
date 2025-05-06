import { mockTodosRepository } from '@modules/todos/repositories/__mocks__/todos.repository.mocks';

import AppError from '@shared/errors/app.error';

import DeleteTodosUseCase from '../delete-todo.use-case';
import { mockDeleteTodo } from './delete-todo.mocks';

describe('USE-CASE -> Delete Todo', () => {
  let deleteTodosUseCase: DeleteTodosUseCase;

  beforeAll(() => {
    deleteTodosUseCase = new DeleteTodosUseCase(mockTodosRepository);
  });

  it('should create a new todo', async () => {
    await deleteTodosUseCase.execute(mockDeleteTodo);

    expect(mockTodosRepository.remove).toHaveBeenCalledWith(mockDeleteTodo.id);
  });

  it('should throw an error if the todo does not exists', async () => {
    mockTodosRepository.findById.mockResolvedValue({
      description: 'mock_description',
      id: 'mock_id',
      title: 'mock_title',
      userId: 'mock_userId',
    });

    await expect(
      deleteTodosUseCase.execute(mockDeleteTodo),
    ).rejects.toBeInstanceOf(AppError);
  });
});
