import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "../../ui/button";
import { CustomFormField } from "@/components/molecules/CustomFormField";


type InputProps = z.input<typeof signupFormSchema>;
type OutputProps = z.output<typeof signupFormSchema>;

export const SignupForm = () => {
  const form = useForm<InputProps, unknown, OutputProps>({
    mode: "onChange",
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = (data: OutputProps) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          control={form.control}
          name="email"
          label="メールアドレス"
        />
        <CustomFormField
          control={form.control}
          name="password"
          label="パスワード"
          type="password"
        />
        <CustomFormField
          control={form.control}
          name="display_name"
          label="名前"
        />
        <CustomFormField
          control={form.control}
          name="username"
          label="ユーザー名"
        />
        <p className="m-0">生年月日</p>
        <div className="flex gap-x-6">
          <CustomFormField
            control={form.control}
            name="birth_year"
            label="年"
          />
          <CustomFormField
            control={form.control}
            name="birth_month"
            label="月"
          />
          <CustomFormField control={form.control} name="birth_day" label="日" />
        </div>
        <Button
          type="submit"
          className="w-full h-12 rounded-full text-base font-bold"
        >
          作成する
        </Button>
      </form>
    </Form>
  );
};
