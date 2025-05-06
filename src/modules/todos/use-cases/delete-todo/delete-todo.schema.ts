import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

const deleteTodoRequestSchema = todoEntitySchema
  .pick({
    id: true,
  })
  .required();

export type DeleteTodoUseCaseRequest = z.infer<typeof deleteTodoRequestSchema>;
