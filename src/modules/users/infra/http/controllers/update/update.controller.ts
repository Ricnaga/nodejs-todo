import { userEntitySchema } from "@modules/users/entities/user.schema";
import UpdateUserUseCase from "@modules/users/use-cases/update-user/update-user.use-case";
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

 * /users/{id}:
 *  put:
 *    tags:
 *      - Users
 *    summary: Atualizar um cadastro de um usuário
 *    description: Dado um id, usuário, email e senha, gera um atualização do usuário no banco de dados.
 *    security:
 *      - Bearer token: []

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
 *              username: user.name
 *              password: _Abc123
 *              email: user.name@email.com

 *    responses:
 *        "200":
 *          description: Usuário atual
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                        example: "user_id"
 *                      username:
 *                        type: string
 *                        example: "user.name"
 *                      email:
 *                        type: string
 *                        example: "user.name@email.com" 
 *                      password:
 *                        type: string
 *                        example: "user_password"
 *              example:
 *                user:
 *                  id: user_id
 *                  username: user.name
 *                  email: user.name@email.com
 *                  password: user_password
 *        "401":
 *          description: Você não possui um token válido
 *        "500":
 *          description: Erro interno do servidor
 * 
 */

const updateBodySchema = userEntitySchema.omit({ id: true });

const updateParamsSchema = userEntitySchema.pick({ id: true });

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

      const updatedUser = await updateUserUseCase.execute({ user: data });

      return response.status(200).json({ user: updatedUser });
    } catch (error) {
      next(error);
    }
  }
}
