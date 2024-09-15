import { removeAuthTokens, saveAuthTokens, setAuthHeaders } from "@/utils/auth";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";
import { FC, ReactElement, useEffect, useState } from "react";
import apiClient from "@/apis/apiClient";
import { useNavigate } from "react-router-dom";

type ApiErrorResponse = {
  errors: {
    [key: string]: Array<string>;
    full_messages: Array<string>;
  };
};

type AxiosClientProviderProps = {
  children: ReactElement;
};

export const AxiosClientProvider: FC<AxiosClientProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isInterceptorSet, setIsInterceptorSet] = useState(false);

  useEffect(() => {
    const requestInterceptors = apiClient.interceptors.request.use(
      setAuthHeaders,
      (error) => Promise.reject(error)
    );
    const responseInterceptors = apiClient.interceptors.response.use(
      (response: AxiosResponse) => {
        const newTokens = {
          "access-token": response.headers["access-token"],
          client: response.headers["client"],
          uid: response.headers["uid"],
        };
        if (newTokens["access-token"]) {
          saveAuthTokens(newTokens);
        }

        return response;
      },
      (error: AxiosError<ApiErrorResponse>) => {
        if (error.response) {
          const status = error.response.status;

          switch (status) {
            case 401:
              toast.error("認証エラーが発生しました｡再度ログインしてください｡");
              removeAuthTokens();
              navigate("/users/login");
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

    setIsInterceptorSet(true);

    return () => {
      apiClient.interceptors.request.eject(requestInterceptors);
      apiClient.interceptors.response.eject(responseInterceptors);
    };
  }, []);

  if (!isInterceptorSet) {
    return null;
  }

  return <>{children}</>;
};
