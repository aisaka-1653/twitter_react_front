import { z } from "zod";

const IMAGE_TYPES = ["image/jpeg", "image/png"];

export const tweetFormSchema = z
  .object({
    content: z
      .string()
      .max(140, "140文字以内で入力してください")
      .optional()
      .transform((val) => (val === undefined ? "" : val)),
    image: z
      .custom<File>()
      .refine((image) => image && IMAGE_TYPES.includes(image.type), {
        message: "この画像形式には対応していません",
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.image && (!data.content || data.content.trim() === "")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "画像かテキストのどちらかは入力必須です",
        path: ["content"],
      });
    }
  });

export type TweetFormSchema = z.infer<typeof tweetFormSchema>;
