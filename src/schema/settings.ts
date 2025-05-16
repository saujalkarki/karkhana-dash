import { z } from "zod";

export const categorySchema = z.object({
  category_Name: z.string({
    required_error: "Category name is required.",
  }),
});
