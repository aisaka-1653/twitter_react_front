import { fetcher } from "@/apis/apiClient";
import { Tweet } from "@/types/tweet";
import useSWR, { KeyedMutator, SWRResponse } from "swr";

type UseAllRetweetsReturn = {
  retweets: Array<Tweet> | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<Array<Tweet>>;
};

export const useAllRetweets = (id: string): UseAllRetweetsReturn => {
  const {
    data: retweets,
    error,
    isLoading,
    mutate,
  }: SWRResponse<Array<Tweet>, Error> = useSWR(
    `/users/${id}/retweets`,
    fetcher,
  );

  return { retweets, isLoading, isError: !!error, mutate };
};
