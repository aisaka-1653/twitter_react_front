import { z } from "zod";

const IMAGE_TYPES = ["image/jpeg", "image/png"];

export const profileEditFormSchema = z.object({
  avatar: z
    .custom<File>()
    .refine((image) => image && IMAGE_TYPES.includes(image.type), {
      message: "この画像形式には対応していません",
    })
    .optional(),
  header: z
    .custom<File>()
    .refine((image) => image && IMAGE_TYPES.includes(image.type), {
      message: "この画像形式には対応していません",
    })
    .optional(),
  display_name: z
    .string()
    .min(1, "名前は入力必須です")
    .max(50, "50文字以内で入力してください"),
  bio: z.string().max(160, "160文字以内で入力してください"),
  location: z.string().max(30, "30文字以内で入力してください"),
  website: z.string().max(100, "100文字以内で入力してください"),
});

export type ProfileEditFormProps = z.infer<typeof profileEditFormSchema>;
