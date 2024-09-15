import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

type tweetTextProps = {
  content: string;
};

export const tweetText = (content: tweetTextProps): Promise<AxiosResponse> => {
  return apiClient.post("/tweets", content);
};

export const tweetImage = (formData: FormData): Promise<AxiosResponse> => {
  return apiClient.post("/images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
