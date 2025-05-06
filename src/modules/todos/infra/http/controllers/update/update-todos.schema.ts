import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

export const updateTodoBodySchema = todoEntitySchema.pick({
  description: true,
  title: true,
});

export const updateTodoParamsSchema = todoEntitySchema.pick({
  id: true,
});

export type UpdateTodoBodyRequest = z.infer<typeof updateTodoBodySchema>;

export type UpdateTodoParamsRequest = z.infer<typeof updateTodoParamsSchema>;
