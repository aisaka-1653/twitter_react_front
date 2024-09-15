import apiClient from "./apiClient";
import { z } from "zod";
import { loginFormSchema, signupFormSchema } from "@/utils/schema/formSchema";
import { AxiosResponse } from "axios";

type CreateUserProps = z.output<typeof signupFormSchema>;
type LoginProps = z.infer<typeof loginFormSchema>;

export const createUser = async (user: CreateUserProps): Promise<void> => {
  return apiClient.post("/users", user);
};

export const login = async (user: LoginProps): Promise<AxiosResponse> => {
  return apiClient.post("/users/sign_in", user);
};

export const logout = async (): Promise<AxiosResponse> => {
  return apiClient.delete("/users/sign_out");
};

export const fetcher = async (url: string) => {
  return apiClient.get(url).then((res) => res.data);
};
