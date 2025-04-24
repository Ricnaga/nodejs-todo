import ListUserUseCase from "@modules/users/use-cases/list-user/list-user.use-case";
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
 *
 * /users/me:
 *  get:
 *    tags:
 *      - Users
 *    summary: Listar informações do atual usuário
 *    security:
 *      - Bearer token: []
 *
 *    responses:
 *       "200":
 *         description: Usuário atual
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: "user_id"
 *                    username:
 *                      type: string
 *                      example: "user_name"
 *
 *            example:
 *              user:
 *                id: user_id
 *                username: user_name
 *
 *       "401":
 *         description: Você não possui um token válido
 *       "404":
 *         description: Você não possui informações do usuário para listagem
 *       "500":
 *         description: Erro interno do servidor
 *
 */

export default class MeController {
  public async list(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const listUserUseCase = await container.getAsync<ListUserUseCase>(
        ListUserUseCase
      );

      const user = await listUserUseCase.execute({ id: request.user.id });
      
      return response.status(200).json({ user });

    } catch (error) {
      next(error);
    }
  }
}
