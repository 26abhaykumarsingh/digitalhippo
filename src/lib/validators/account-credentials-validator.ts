//this will be used to handle both client side validation and server side validation

import {z} from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
  });

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;