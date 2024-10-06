import { fetcher } from "@/apis/apiClient";
import { User } from "@/types/user";
import useSWR from "swr";

export const useCurrentUser = () => {
  const { data, error, isLoading } = useSWR<User>(`/auth/sessions`, fetcher);

  return {
    currentUser: data,
    isLoading,
    isError: error,
  };
};