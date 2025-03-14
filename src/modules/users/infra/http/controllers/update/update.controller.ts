import { Request, Response } from "express";

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags:
 *      - Users
 *    summary: Atualiza um cadastro de um usuário
 *    description: Dado um id, usuário, email e senha, gera um atualização do usuário no banco de dados.
 */

export default class UpdateController {
  public async update(request: Request, response: Response): Promise<Response> {
    return response.status(204).json();
  }
}
