import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "../../ui/button";
import { CustomFormField } from "@/components/molecules/CustomFormField";
import { useLogin } from "@/hooks/useLogin";
import { Loader2 } from "lucide-react";

type LoginFormProps = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const [login, isLoading] = useLogin();

  const form = useForm<LoginFormProps>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (user: LoginFormProps) => {
    login(user);
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
        <Button
          type="submit"
          className="w-full h-12 rounded-full text-base font-bold"
          disabled={isLoading || !form.formState.isValid}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Please Wait</span>
            </>
          ) : (
            "ログイン"
          )}
        </Button>
      </form>
    </Form>
  );
};
