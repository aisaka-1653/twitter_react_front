import { z } from "zod";

export const commentFormSchema = z.object({
  content: z
    .string()
    .max(140, "140文字以内で入力してください")
    .refine((val: string) => {
      return val.trim() !== "";
    }, "空で送信することはできません"),
});

export type CommentFormSchema = z.infer<typeof commentFormSchema>;
