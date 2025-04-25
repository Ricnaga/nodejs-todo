import { z } from "zod";

export const todoEntitySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  title: z.string(),
  description: z.string(),
});
