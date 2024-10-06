import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetcher = async (url: string) => {
  return apiClient.get(url).then((res) => res.data);
};

export default apiClient;
