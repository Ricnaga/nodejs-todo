import { Request, Response } from "express";
import { signUpBodySchema } from "./sign-up.schema";

/**
 * @swagger
 * /users/sign-up:
 *  post:
 *    tags:
 *      - Users
 *    summary: Criar um cadastro de um usuário
 *    description: Dado um usuário, email e senha, gera um cadastro no banco de dados.
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
 *              email:
 *                type: string
 *              password:
 *                type: string
 * 
 *            example:
 *              username: user_name
 *              email: username@email.com
 *              password: Abc123
 *              
 *    responses:
 *       "201":
 *         description: Cadastro criado com sucesso
 *       "400":
 *         description: Username/email ja foram cadastrados
 *       "500":
 *         description: Erro interno do servidor
 */

export default class SignUpController {
  public async create(request: Request, response: Response): Promise<Response> {
    const body = signUpBodySchema.parse(request.body);
    return response.status(201).json();
  }
}
