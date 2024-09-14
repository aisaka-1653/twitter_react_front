import { fetcher } from "@/apis/apiClient";
import { Tweet } from "@/types/tweet";
import useSWR, { SWRResponse } from "swr";

export const useTweet = () => {
  const {
    data,
    error,
    isLoading,
  }: SWRResponse<Array<Tweet>, Error> = useSWR("/tweets", fetcher);

  return { tweets: data, isLoading, isError: !!error };
};
