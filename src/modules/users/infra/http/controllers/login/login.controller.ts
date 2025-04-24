import { NextFunction, Request, Response } from "express";
import { loginBodySchema } from "./login.schema";
import CreateTokenUseCase from "@modules/users/use-cases/create-token/create-token.use-case";
import container from "@shared/container";

/**
 * @swagger
 * /users/login:
 *  post:
 *    tags:
 *      - Users
 *    summary: Criar um token
 *    description: Dado um usuário e senha, cria um token.
 * 
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
 * 
 *            example:
 *              username: user_name
 *              password: Abc123
 *              
 *    responses:
 *       "201":
 *         description:
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *                  description: The user token.
 * 
 *            example:
 *              token: "token"
 *
 *       "400":
 *         description: Username e/ou senha estão incorretos
 *       "500":
 *         description: Erro interno do servidor
 *
 */

export default class LoginController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const body = loginBodySchema.parse(request.body);

    try {
      const createTokenUseCase = await container.getAsync<CreateTokenUseCase>(
        CreateTokenUseCase
      );

      const { token } = await createTokenUseCase.execute(body);

      response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
