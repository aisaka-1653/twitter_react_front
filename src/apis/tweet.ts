import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

type tweetTextProps = {
  content: string;
};

export const tweetText = async (
  content: tweetTextProps,
): Promise<AxiosResponse> => {
  return apiClient.post("/tweets", content);
};

export const tweetImage = async (
  formData: FormData,
): Promise<AxiosResponse> => {
  return apiClient.post("/images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const tweetDetail = async (): Promise<AxiosResponse> => {
  return apiClient.get("/tweets/:id");
};

export const tweetDestroy = async (id: string): Promise<AxiosResponse> => {
  return apiClient.delete(`/tweets/${id}`);
};
