import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

const createTodoRequestSchema = todoEntitySchema
  .pick({
    title: true,
    description: true,
  })
  .required()
  .extend({
    userId: todoEntitySchema.shape.userId.optional(),
  });

export type CreateTodoUseCaseRequest = z.infer<typeof createTodoRequestSchema>;
