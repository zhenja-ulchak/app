import { z } from 'zod';

// Визначення схеми для відповіді від API
const authFormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: 'This field is required',
    })
    .trim(),
  password: z
    .string()
    .min(1, {
      message: 'This field is required',
    })
    .trim(),
});

export type AuthForm = z.infer<typeof authFormSchema>;