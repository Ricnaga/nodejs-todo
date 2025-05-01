import { z } from 'zod';

export const createUserSchema = z
  .object({
    email: z.string(),
    username: z.string(),
    password: z.string(),
  })
  .required();

export type CreateUserUseCaseRequest = z.infer<typeof createUserSchema>;
