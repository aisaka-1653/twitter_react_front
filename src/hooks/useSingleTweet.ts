import { fetcher } from "@/apis/apiClient";
import { Tweet } from "@/types/tweet";
import useSWR, { SWRResponse } from "swr";

export const useSingleTweet = (tweetId: string | undefined) => {
  const {
    data: tweet,
    error,
    isLoading,
  }: SWRResponse<Tweet, Error> = useSWR(
    tweetId ? `/tweets/${tweetId}` : null,
    fetcher
  );

  return { tweet, isLoading, isError: !!error };
};
