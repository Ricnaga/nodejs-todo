import { todoEntitySchema } from "@modules/todos/entities/todos.schema";
import CreateTodoUseCase from "@modules/todos/use-cases/create-todo/create-todo.use-case";
import container from "@shared/container";
import { NextFunction, Request, Response } from "express";

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    Bearer token:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 
* /todos:
 *  post:
 *    tags:
 *      - Todos
 *    summary: Criar um todo
 *    description: Dado título e descrição, cria um todo
 
 *    security:
 *      - Bearer token: []
 
 *    requestBody:
 *       description: Corpo da requisição
 *       required: true
 
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 * 
 *            example:
 *              title: título do todo
 *              description: descrição do todo
 *              
 *    responses:
 *       "204":
 *         description:
 *       "401":
 *         description: Você não possui um token válido
 *       "404":
 *         description: Você não possui informações desse usuário para criação
 *       "500":
 *         description: Erro interno do servidor
 */

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
