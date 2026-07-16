import { z } from "zod";

import { emailSchema, objectIdSchema, passwordSchema } from "./common.validator";

export const createUserSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(50),

  email: emailSchema,

  password: passwordSchema,
});

export const updateUserSchema = z.object({
  name: z.string().trim().min(2).max(50).optional(),

  email: emailSchema.optional(),
});

export const userIdParamsSchema = z.object({
  id: objectIdSchema,
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export type UserIdParams = z.infer<typeof userIdParamsSchema>;
