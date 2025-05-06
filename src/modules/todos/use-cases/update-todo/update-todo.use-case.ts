import { inject, injectable } from 'inversify';

import ITodosRepository from '@modules/todos/repositories/todos.interface';

import { todosRepositoryId } from '@shared/container/di/types';
import AppError from '@shared/errors/app.error';

import { UpdateTodoUseCaseRequest } from './update-todo.schema';

@injectable()
class UpdateTodosUseCase {
  constructor(
    @inject(todosRepositoryId)
    private readonly todosRepository: ITodosRepository,
  ) {}

  public async execute(data: UpdateTodoUseCaseRequest): Promise<void> {
    const { userId, ...todo } = data;

    if (!userId)
      throw new AppError(
        'Você não possui informações desse usuário para listagem',
        404,
      );

    await this.todosRepository.update({ todo: { ...todo, userId } });
  }
}

export default UpdateTodosUseCase;
