import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

export const createRetweet = async (
  tweet_id: string,
): Promise<AxiosResponse> => {
  return apiClient.post(`/tweets/${tweet_id}/retweets`);
};
