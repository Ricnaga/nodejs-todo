import { Request, Response } from "express";

/**
 * @swagger
 * /todos:
 *  post:
 *    tags:
 *      - Todos
 *    summary: Retrieve a list of JSONPlaceholder users
 *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

export default class CreateTodoController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.status(204).json();
  }
}
