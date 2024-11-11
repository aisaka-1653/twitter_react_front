import { fetcher } from "@/apis/apiClient";
import { Comment } from "@/types/comment";
import useSWR, { KeyedMutator, SWRResponse } from "swr";

type useAllCommentsReturn = {
  comments: Array<Comment> | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<Array<Comment>>;
};

export const useAllComments = (
  tweetId: string | undefined,
): useAllCommentsReturn => {
  const {
    data: comments,
    error,
    isLoading,
    mutate,
  }: SWRResponse<Array<Comment>, Error> = useSWR(
    tweetId ? `/tweets/${tweetId}/comments` : null,
    fetcher,
  );

  return { comments, isLoading, isError: !!error, mutate };
};
