import { fetcher } from "@/apis/users";
import { useUserStore } from "@/stores/userStore";
import { User } from "@/types/user";
import useSWR, { SWRResponse } from "swr";

export const useUser = () => {
  const userId = useUserStore((state) => state.userId);

  const { data, error, isLoading }: SWRResponse<User, Error> = useSWR(
    userId ? `/users/${userId}` : null,
    fetcher
  );

  return { user: data, isLoading, isError: !!error };
};
