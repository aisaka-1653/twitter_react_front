import apiClient from "./apiClient";
import { z } from "zod";
import { loginFormSchema, signupFormSchema } from "@/utils/schema/formSchema";
import { AxiosResponse } from "axios";

type CreateUserProps = z.output<typeof signupFormSchema>;
type LoginProps = z.infer<typeof loginFormSchema>;

export const createUser = async (user: CreateUserProps): Promise<void> => {
  return apiClient.post("/users", user);
};

export const editProfile = async (
  formData: FormData,
): Promise<AxiosResponse> => {
  return apiClient.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const login = async (user: LoginProps): Promise<AxiosResponse> => {
  return apiClient.post("/users/sign_in", user);
};

export const logout = async (): Promise<AxiosResponse> => {
  return apiClient.delete("/users/sign_out");
};

export const userFollow = async (userId: string): Promise<AxiosResponse> => {
  return apiClient.post(`/users/${userId}/follow`);
};

export const userUnfollow = async (userId: string): Promise<AxiosResponse> => {
  return apiClient.delete(`/users/${userId}/unfollow`);
};
