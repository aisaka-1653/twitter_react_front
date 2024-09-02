import { loginFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "@/apis/users";
import { useState } from "react";
import { toast } from "sonner";

type LoginFormProps = z.infer<typeof loginFormSchema>;
type LoginReturn = [(user: LoginFormProps) => Promise<void>, boolean];

export const useLogin = (): LoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (user: LoginFormProps) => {
    setIsLoading(true);
    try {
      await loginAPI(user);
      toast.success("ログインに成功しました");
      navigate("/home");
    } finally {
      setIsLoading(false);
    }
  };

  return [login, isLoading];
};
