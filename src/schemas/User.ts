import { z } from "zod";

export const userSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email().nonempty("E-mail is required"),
  phone: z.number({
    required_error: "Phone is required",
    invalid_type_error: "Phone must be a number",
  }),
});

export type User = z.infer<typeof userSchema>;
