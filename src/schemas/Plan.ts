import { z } from "zod";

export const planSchema = z.object({
  plan: z.enum(["arcade", "advanced", "pro"]),
  period: z.enum(["monthly", "yearly"]),
});

export type Plan = z.infer<typeof planSchema>;
