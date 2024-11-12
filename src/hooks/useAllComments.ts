import { fetcher } from "@/apis/apiClient";
import { Comment } from "@/types/comment";
import useSWR, { KeyedMutator, SWRResponse } from "swr";

type CommentType = "tweet" | "user";

type UseAllCommentsReturn = {
  comments: Array<Comment> | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<Array<Comment>>;
};

export const useAllComments = (
  type: CommentType,
  id?: string,
): UseAllCommentsReturn => {
  const getCommentsUrl = (type: CommentType, id?: string) => {
    if (!id) return null;

    const paths = {
      tweet: `/tweets/${id}/comments`,
      user: `/users/${id}/comments`,
    };

    return paths[type];
  };

  const {
    data: comments,
    error,
    isLoading,
    mutate,
  }: SWRResponse<Array<Comment>, Error> = useSWR(
    getCommentsUrl(type, id),
    fetcher,
  );

  return { comments, isLoading, isError: !!error, mutate };
};
