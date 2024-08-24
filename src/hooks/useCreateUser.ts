import { signupFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { createUser as createUserAPI } from "@/apis/users";
import { useState } from "react";
import { toast } from "sonner";

type OutputProps = z.output<typeof signupFormSchema>;
type CreateUserReturn = [(user: OutputProps) => Promise<void>, boolean];

export const useCreateUser = (): CreateUserReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createUser = async (user: OutputProps) => {
    setIsLoading(true);
    try {
      await createUserAPI(user);
      toast.success("認証メールを送信しました｡メールを確認してください｡");
      navigate("/users/login");
    } finally {
      setIsLoading(false);
    }
  };

  return [createUser, isLoading];
};
