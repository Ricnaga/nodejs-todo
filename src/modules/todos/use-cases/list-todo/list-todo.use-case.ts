import Todos from "@modules/todos/entities/todos.entity";
import ITodosRepository from "@modules/todos/repositories/todos.interface";
import { todosRepositoryId } from "@shared/container/di/types";
import AppError from "@shared/errors/app.error";
import { inject, injectable } from "inversify";

interface IRequest {
  userId?: string;
}

@injectable()
class ListTodosUseCase {
  constructor(
    @inject(todosRepositoryId)
    private readonly todosRepository: ITodosRepository
  ) {}

  public async execute(data: IRequest): Promise<Array<Todos>> {
    const { userId } = data;

    if (!userId)
      throw new AppError(
        "Você não possui informações desse usuário para listagem"
      );

    const todos = await this.todosRepository.list(userId);

    return todos
  }
}

export default ListTodosUseCase;
