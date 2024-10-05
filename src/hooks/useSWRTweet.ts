import { fetcher } from "@/apis/apiClient";
import useSWRInfinite from "swr/infinite";

const LIMIT = 10;

export const useSWRTweet = () => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.has_more) return null;
    const offset = pageIndex * LIMIT;
    return `/tweets?offset=${offset}&limit=${LIMIT}`;
  };

  const {
    data: tweetList,
    error,
    size,
    setSize,
    isLoading,
  } = useSWRInfinite(getKey, fetcher);

  const loadMoreTweets = () => {
    setSize(size + 1);
  };

  const isLast = tweetList ? !tweetList[tweetList.length - 1].has_more : false;
  const tweets = tweetList ? tweetList.flatMap(page => page.tweets) : null;

  return {
    tweets,
    isLast,
    isLoading,
    error,
    loadMoreTweets,
  };
};
