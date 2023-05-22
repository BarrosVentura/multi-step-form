import { z } from "zod";

export const addonsSchema = z.object({
  addons: z.enum(["online", "storage", "custom"]).array().nullable(),
});

export type Addons = z.infer<typeof addonsSchema>;
