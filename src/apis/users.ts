import { z } from "zod";
import { signupFormSchema } from "@/utils/formSchema";
import apiClient from "./apiClient";

type OutputProps = z.output<typeof signupFormSchema>;

export const createUser = async (user: OutputProps): Promise<void> => {
  return apiClient.post("/users", user);
};
