import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const loginBodySchema = userEntitySchema
  .pick({
    username: true,
    password: true,
  })
  .required();

export type LoginBodyRequest = z.infer<typeof loginBodySchema>;
