import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const updateUsersBodySchema = userEntitySchema
  .omit({ id: true })
  .required();

export const updateUsersParamsSchema = userEntitySchema
  .pick({ id: true })
  .required();

export type UpdateUserBodyRequest = z.infer<typeof updateUsersBodySchema>;
export type UpdateUserParamsRequest = z.infer<typeof updateUsersParamsSchema>;
