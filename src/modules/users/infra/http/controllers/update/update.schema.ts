import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const updateBodySchema = userEntitySchema.omit({ id: true }).required();

export const updateParamsSchema = userEntitySchema
  .pick({ id: true })
  .required();

export type UpdateBodyRequest = z.infer<typeof updateBodySchema>;
export type UpdateParamsRequest = z.infer<typeof updateParamsSchema>;
