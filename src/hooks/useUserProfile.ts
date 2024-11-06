import { fetcher } from "@/apis/apiClient";
import { UserProfile } from "@/types/user";
import useSWR, { SWRResponse } from "swr";

export const useUserProfile = (userId: string | undefined) => {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  }: SWRResponse<UserProfile, Error> = useSWR(
    userId ? `/users/${userId}` : null,
    fetcher,
  );

  return { user, isLoading, isError: !!error, mutate };
};
