import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

export const createComment = async (
  tweet_id: string,
  content: string,
): Promise<AxiosResponse> => {
  return apiClient.post("/comments", { tweet_id, content });
};
