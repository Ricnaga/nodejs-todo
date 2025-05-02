import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const createTokenSchema = userEntitySchema
  .pick({
    username: true,
    password: true,
  })
  .required();

export type CreateTokenUseCaseRequest = z.infer<typeof createTokenSchema>;
