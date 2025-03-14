import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  username: z.string().min(6),
  password: z.string().min(6),
});

export const signUpBodySchema = signUpSchema;
