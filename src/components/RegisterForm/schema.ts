import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(3),
    phone: z.string().min(10),
    diallingCode: z.string().min(1).default("+255"),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Les mots de passe ne concordent pas.",
    path: ["password_confirmation"],
  });

export type Register = z.infer<typeof RegisterSchema>;
