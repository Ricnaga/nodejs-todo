import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

export const signUpBodySchema = userEntitySchema
  .pick({
    email: true,
    username: true,
    password: true,
  })
  .required();

export type SignUpBodyRequest = z.infer<typeof signUpBodySchema>;
