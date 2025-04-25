import { todoEntitySchema } from "@modules/todos/entities/todos.schema";
import DeleteTodosUseCase from "@modules/todos/use-cases/delete-todo/delete-todo.use-case";
import container from "@shared/container";
import { NextFunction, Request, Response } from "express";

const deleteParamsSchema = todoEntitySchema.pick({
  id: true,
});

export default class DeleteTodoController {
  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = deleteParamsSchema.parse(request.params);

      const deleteTodosUseCase = await container.getAsync<DeleteTodosUseCase>(
        DeleteTodosUseCase
      );

      await deleteTodosUseCase.execute({ id });

      return response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
