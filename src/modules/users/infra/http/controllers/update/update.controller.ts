import { NextFunction, Request, Response } from "express";
import { updateBodySchema, updateParamsSchema } from "./update.validator";
import container from "@shared/container";
import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    Bearer token: 
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT 
 * 
 * /users/{id}:
 *  put:
 *    tags:
 *      - Users
 *    summary: Atualizar um cadastro de um usuário
 *    description: Dado um id, usuário, email e senha, gera um atualização do usuário no banco de dados.
 *    security:
 *      - Bearer token: []
 *
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id do usuário
 
 *    requestBody:
 *       description: Corpo da requisição
 *       required: true
 
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              email:
 *                type: string
 
 *            example:
 *              username: user_name
 *              password: Abc123
 *              email: user_name@email.com
 * 
  *    responses:
  *       "204":
  *         description: 
  *       "401":
  *         description: 
  *       "500":
  *         description: Erro interno do servidor
 * 
 */

export default class UpdateController {
  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const body = updateBodySchema.parse(request.body);
    const { id } = updateParamsSchema.parse(request.params);

    const data = { ...body, id };

    try {
      const updateUserUseCase = await container.getAsync<UpdateUserUseCase>(
        UpdateUserUseCase
      );

      await updateUserUseCase.execute(data);

      return response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
