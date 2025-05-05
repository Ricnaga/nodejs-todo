import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

export const createTodoBodySchema = todoEntitySchema
  .pick({
    description: true,
    title: true,
  })
  .required();

export type CreateTodoBodyRequest = z.infer<typeof createTodoBodySchema>;
