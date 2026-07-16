import { z } from "zod";

export const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

export const emailSchema = z.string().trim().email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must contain at least 8 characters")
  .max(64);

export const urlSchema = z.string().url("Invalid URL");

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),

  limit: z.coerce.number().int().positive().max(100).default(10),
});
