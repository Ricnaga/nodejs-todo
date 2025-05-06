import { mockTodosRepository } from '@modules/todos/repositories/__mocks__/todos.repository.mocks';

import AppError from '@shared/errors/app.error';

import UpdateTodosUseCase from '../update-todo.use-case';
import { mockUpdateTodo } from './update-todo.mocks';

describe('USE-CASE -> Update Todo', () => {
  let updateTodosUseCase: UpdateTodosUseCase;

  beforeAll(() => {
    updateTodosUseCase = new UpdateTodosUseCase(mockTodosRepository);
  });

  it('should update a todo', async () => {
    await updateTodosUseCase.execute(mockUpdateTodo);

    expect(mockTodosRepository.update).toHaveBeenCalledWith({
      todo: mockUpdateTodo,
    });
  });

  it('should throw an error if the user ID does not exists', async () => {
    await expect(
      updateTodosUseCase.execute({ ...mockUpdateTodo, userId: undefined }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
