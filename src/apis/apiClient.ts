import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type ApiErrorResponse = {
  errors: {
    [key: string]: Array<string>;
    full_messages: Array<string>;
  };
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          toast.error("認証エラーが発生しました｡再度ログインしてください｡");
          break;
        case 403:
          toast.error("アクセス権限がありません｡");
          break;
        case 422:
          if (error.response.data?.errors) {
            error.response.data.errors.full_messages.forEach((message) =>
              toast.error(message)
            );
          } else {
            toast.error("バリデーションエラーが発生しました｡");
          }
          break;
        default:
          if (status >= 500) {
            toast.error(
              "サーバーエラーが発生しました。もう一度お試しください。"
            );
          } else {
            toast.error("エラーが発生しました。もう一度お試しください。");
          }
      }
    } else {
      toast.error("予期せぬエラーが発生しました");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
