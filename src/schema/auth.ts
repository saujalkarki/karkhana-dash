import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({ message: "Please enter a valid email to login." }),
  password: z
    .string({
      required_error: "Password i required.",
    })
    .min(7, {
      message: "Password must be 8 characters long.",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Password must include uppercase, lowercase, number, and special character.",
      }
    ),
});
