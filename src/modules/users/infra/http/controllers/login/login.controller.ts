import { Request, Response } from "express";

/**
 * @swagger
 * /users/login:
 *  post:
 *    tags:
 *      - Users
 *    summary: Criar um token
 *    description: Dado um usuário e senha, cria um token.
 *    responses:
 *       "201":
 *         description: Created
 *
 */

export default class LoginController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.status(201).json();
  }
}
