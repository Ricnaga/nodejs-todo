import { z } from 'zod';

import { todoEntitySchema } from '@modules/todos/entities/todos.schema';

export const deleteTodoParamsSchema = todoEntitySchema.pick({
  id: true,
});

export type DeleteTodoParamsRequest = z.infer<typeof deleteTodoParamsSchema>;
