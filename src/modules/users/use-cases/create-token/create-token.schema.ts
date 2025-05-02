import { z } from 'zod';

import { userEntitySchema } from '@modules/users/entities/user.schema';

const createTokenRequestSchema = userEntitySchema
  .pick({
    username: true,
    password: true,
  })
  .required();

export type CreateTokenUseCaseRequest = z.infer<
  typeof createTokenRequestSchema
>;

const createTokenResponseSchema = z
  .object({
    token: z.string(),
  })
  .required();

export type CreateTokenUseCaseResponse = z.infer<
  typeof createTokenResponseSchema
>;
