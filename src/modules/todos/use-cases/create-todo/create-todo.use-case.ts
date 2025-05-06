import { inject, injectable } from 'inversify';

import ITodosRepository from '@modules/todos/repositories/todos.interface';

import { todosRepositoryId } from '@shared/container/di/types';
import AppError from '@shared/errors/app.error';

import { CreateTodoUseCaseRequest } from './create-todo.schema';

@injectable()
class CreateTodoUseCase {
  constructor(
    @inject(todosRepositoryId)
    private readonly todosRepository: ITodosRepository,
  ) {}

  public async execute(data: CreateTodoUseCaseRequest): Promise<void> {
    const { userId, ...todo } = data;

    if (!userId)
      throw new AppError(
        'Você não possui informações desse usuário para criação',
        404,
      );

    await this.todosRepository.create({ todo: { ...todo, userId } });
  }
}

export default CreateTodoUseCase;
