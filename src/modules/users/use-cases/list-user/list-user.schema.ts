import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

const listUserRequestSchema = userEntitySchema
  .pick({
    id: true,
  })
  .partial();

export type ListUserUseCaseRequest = z.infer<typeof listUserRequestSchema>;

const listUserResponseSchema = userEntitySchema.pick({
  id: true,
  username: true,
});

export type ListUserUseCaseResponse = z.infer<typeof listUserResponseSchema>;
