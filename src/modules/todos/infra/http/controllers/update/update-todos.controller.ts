import { todoEntitySchema } from "@modules/todos/entities/todos.schema";
import UpdateTodosUseCase from "@modules/todos/use-cases/update-todo/update-todo.use-case";
import container from "@shared/container";
import { NextFunction, Request, Response } from "express";

/**
 * @swagger
 * /todos/{id}:
 *  patch:
 *    tags:
 *      - Todos
 *    summary: Retrieve a list of JSONPlaceholder users
 *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

const updateBodySchema = todoEntitySchema.pick({
  description: true,
  title: true,
});

const updateParamsSchema = todoEntitySchema.pick({
  id: true,
});

export default class UpdateTodoController {
  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const body = updateBodySchema.parse(request.body);
      const { id } = updateParamsSchema.parse(request.params);
      const { id: userId } = request.user;

      const updateTodosUseCase = await container.getAsync<UpdateTodosUseCase>(
        UpdateTodosUseCase
      );

      await updateTodosUseCase.execute({
        ...body,
        id,
        userId,
      });

      response.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}
