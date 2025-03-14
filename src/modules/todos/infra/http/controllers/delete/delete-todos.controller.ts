import { Request, Response } from "express";

/**
 * @swagger
 * /todos/{id}:
 *  delete:
 *    tags:
 *      - Todos
 *    summary: Retrieve a list of JSONPlaceholder users
 *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

export default class DeleteTodoController {
  public async delete(request: Request, response: Response): Promise<Response> {
    return response.status(204).json();
  }
}
