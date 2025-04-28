/**
 * @swagger
 * components:
 *  securitySchemes:
 *    Bearer token:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT

 * /todos:
 *  get:
 *    tags:
 *      - Todos
 *    summary: Listar todos do atual usuário
 *    description: Listar todos do atual usuário
 
 *    security:
 *      - Bearer token: []

 *    responses:
 *       "200":
 *         description: todos do usuário atual
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                todos:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                              example: "todo_id"
 *                          userId:
 *                              type: string
 *                              example: "user_id"
 *                          title:
 *                              type: string
 *                              example: "todo title"
 *                          description:
 *                              type: string
 *                              example: "todo description"

 *            example:
 *              todos:
 *                - id: todo_id
 *                  userId: user_id
 *                  title: todo title
 *                  description: todo description

 *       "401":
 *         description: Você não possui um token válido
 *       "404":
 *         description: Você não possui informações desse usuário para listagem
 *       "500":
 *         description: Erro interno do servidor
 
 */
