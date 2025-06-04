import { z } from "zod";
export const categorySchema = z.object({
  name: z
    .string()
    .min(3, "Category name must be at least 3 characters")
    .max(50, "Category name must be less than 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
  image: z.string().optional(),
  isActive: z.boolean().default(true),
});
export type Category = z.infer<typeof categorySchema>;

export const categoriesResponseSchema = z.object({
  status: z.literal("success"),
  categories: z.array(categorySchema),
  limit: z.number(),
  page: z.number(),
  pages: z.array(z.union([z.number(), z.string()])),
  results: z.number(),
});
export type CategoriesResponseSchema = z.infer<typeof categoriesResponseSchema>;
