import { fetcher } from "@/apis/apiClient";
import { Tweet } from "@/types/tweet";
import { INTERACTION_CONFIGS, InteractionType } from "@/types/interaction";
import useSWR, { SWRResponse } from "swr";

export const useUserInteraction = (id: string, type: InteractionType) => {
  const config = INTERACTION_CONFIGS[type];
  const endpoint = `/users/${id}/${config.endpoint}`;

  const {
    data,
    error,
    isLoading,
    mutate,
  }: SWRResponse<Array<Tweet>, Error> = useSWR(endpoint, fetcher);

  return { data, isLoading, isError: !!error, mutate };
};
