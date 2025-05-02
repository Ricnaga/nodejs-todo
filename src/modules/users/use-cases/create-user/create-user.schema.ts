import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

const createUserRequestSchema = userEntitySchema
  .pick({
    email: true,
    username: true,
    password: true,
  })
  .required();

export type CreateUserUseCaseRequest = z.infer<typeof createUserRequestSchema>;
