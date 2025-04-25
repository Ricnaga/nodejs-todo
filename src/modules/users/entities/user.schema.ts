import { z } from "zod";

export const userEntitySchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string().min(6),
  password: z.string().min(6),
});
