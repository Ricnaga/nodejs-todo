/**
 * @swagger
 * components:
 *  securitySchemes:
 *    Bearer token:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 
 * /todos:
 *  post:
 *    tags:
 *      - Todos
 *    summary: Criar um todo
 *    description: Dado título e descrição, cria um todo
 
 *    security:
 *      - Bearer token: []
 
 *    requestBody:
 *       description: Corpo da requisição
 *       required: true
 
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 * 
 *            example:
 *              title: título do todo
 *              description: descrição do todo
 *              
 *    responses:
 *       "204":
 *         description:
 *       "401":
 *         description: Você não possui um token válido
 *       "404":
 *         description: Você não possui informações desse usuário para criação
 *       "500":
 *         description: Erro interno do servidor
 */
