import { loginFormSchema } from "@/utils/schema/formSchema";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { login as loginAPI, logout as logoutAPI } from "@/apis/users";
import { useState } from "react";
import { toast } from "sonner";
import { removeAuthTokens } from "@/utils/auth";

type LoginFormProps = z.infer<typeof loginFormSchema>;
type AuthReturn = {
  login: (user: LoginFormProps) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

export const useAuth = (): AuthReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (user: LoginFormProps) => {
    setIsLoading(true);
    try {
      await loginAPI(user);
      toast.success("ログインしました");
      navigate("/home");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutAPI();
      removeAuthTokens();
      toast.success("ログアウトしました");
      navigate("/users/login");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, logout, isLoading };
};
