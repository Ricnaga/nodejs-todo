import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

const listTodoRequestSchema = z.object({
  userId: todoEntitySchema.shape.userId.optional(),
});

export type ListTodoUseCaseRequest = z.infer<typeof listTodoRequestSchema>;
