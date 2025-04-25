import { todoEntitySchema } from "@modules/todos/entities/todos.schema";
import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";
import container from "@shared/container";
import { NextFunction, Request, Response } from "express";

const createTodoBodySchema = todoEntitySchema
  .pick({
    description: true,
    title: true,
  })
  .readonly();

export default class CreateTodoController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const body = createTodoBodySchema.parse(request.body);
    const { user } = request;

    try {
      const createTodoUseCase = await container.getAsync<CreateTodoUseCase>(
        CreateTodoUseCase
      );

      await createTodoUseCase.execute({ ...body, userId: user.id });

      response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
