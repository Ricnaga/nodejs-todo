import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const listUserSchema = userEntitySchema
  .pick({
    id: true,
  })
  .partial();

export type ListUserUseCaseRequest = z.infer<typeof listUserSchema>;
