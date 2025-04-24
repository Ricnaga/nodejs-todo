import { z } from "zod";

const updateSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string().min(6),
  password: z.string().min(6),
});

export const updateBodySchema = updateSchema.omit({ id: true });

export const updateParamsSchema = updateSchema.pick({ id: true });
