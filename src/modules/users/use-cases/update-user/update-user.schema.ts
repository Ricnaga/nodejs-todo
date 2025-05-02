import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

const updateUserRequestSchema = z.object({
  user: userEntitySchema,
});

export type UpdateUserUseCaseRequest = z.infer<typeof updateUserRequestSchema>;

const updateUserResponseSchema = userEntitySchema.pick({
  id: true,
  username: true,
});

export type UpdateUserUseCaseResponse = z.infer<
  typeof updateUserResponseSchema
>;
