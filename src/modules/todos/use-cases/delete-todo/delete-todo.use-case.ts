import { inject, injectable } from 'inversify';

import ITodosRepository from '@modules/todos/repositories/todos.interface';

import { todosRepositoryId } from '@shared/container/di/types';
import AppError from '@shared/errors/app.error';

import { DeleteTodoUseCaseRequest } from './delete-todo.schema';

@injectable()
class DeleteTodosUseCase {
  constructor(
    @inject(todosRepositoryId)
    private readonly todosRepository: ITodosRepository,
  ) {}

  public async execute(data: DeleteTodoUseCaseRequest): Promise<void> {
    const todoFound = await this.todosRepository.findById(data.id);

    if (todoFound)
      throw new AppError('Não é possível remover um todo inexistente', 404);

    await this.todosRepository.remove(data.id);
  }
}

export default DeleteTodosUseCase;
