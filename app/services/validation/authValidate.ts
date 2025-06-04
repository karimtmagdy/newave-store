import { z } from "zod";
const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .trim(),
  email: z.string().email("Invalid email format").toLowerCase().trim(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
  role: z.enum(["user", "admin"]).default("user"),

  confirm_password: z.string(),
});
export const registerSchema = userSchema
  .omit({
    role: true,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });
export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

// ------------------------

export type TRegister = z.infer<typeof registerSchema>;
export type TLogin = z.infer<typeof loginSchema>;

export type TUser = z.infer<typeof userSchema>;

// export const extendedRegisterSchema = registerSchema.extend({
//   confirmPassword: z.string(),
// });
// export type TExtendedRegister = z.infer<typeof extendedRegisterSchema>;
