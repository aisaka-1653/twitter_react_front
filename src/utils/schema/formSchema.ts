import { z } from "zod";

const currentYear = new Date().getFullYear();

export const signupFormSchema = z
  .object({
    email: z.string().email("有効なメールアドレスを入力してください"),
    password: z.string().min(6, "パスワードは6文字以上で入力してください"),
    display_name: z
      .string()
      .min(1, "名前は入力必須です")
      .max(50, "50文字以内で入力してください"),
    username: z
      .string()
      .min(1, "ユーザーネームは入力必須です")
      .max(50, "50文字以内で入力してください"),
    birth_year: z
      .string()
      .min(4, "年は入力必須です")
      .refine((val) => {
        const year = parseInt(val, 10);
        return !isNaN(year) && year >= 1900 && year <= currentYear;
      }, "有効な年を入力してください"),
    birth_month: z
      .string()
      .min(1, "月は入力必須です")
      .refine((val) => {
        const month = parseInt(val, 10);
        return !isNaN(month) && month >= 1 && month <= 12;
      }, "有効な月を入力してください"),
    birth_day: z
      .string()
      .min(1, "日は入力必須です")
      .refine((val) => {
        const day = parseInt(val, 10);
        return !isNaN(day) && day >= 1 && day <= 31;
      }, "有効な日を入力してください"),
  })
  .transform(({ birth_year, birth_month, birth_day, ...rest }) => ({
    ...rest,
    date_of_birth: new Date(
      `${birth_year}-${birth_month.padStart(2, "0")}-${birth_day.padStart(2, "0")}`
    ).toISOString(),
  }));

export const loginFormSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});
