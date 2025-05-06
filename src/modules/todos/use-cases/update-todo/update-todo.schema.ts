import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

const updateTodoRequestSchema = todoEntitySchema
  .pick({
    id: true,
    title: true,
    description: true,
  })
  .required()
  .extend({
    userId: todoEntitySchema.shape.userId.optional(),
  });

export type UpdateTodoUseCaseRequest = z.infer<typeof updateTodoRequestSchema>;
