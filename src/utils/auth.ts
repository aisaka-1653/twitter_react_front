import {
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";

type AuthTokensReturn = {
  "access-token": string | null;
  client: string | null;
  uid: string | null;
};

const getAuthTokens = (): AuthTokensReturn => {
  return {
    "access-token": localStorage.getItem("access-token"),
    client: localStorage.getItem("client"),
    uid: localStorage.getItem("uid"),
  };
};

export const saveAuthTokens = (
  headers: AxiosResponseHeaders | RawAxiosRequestHeaders
) => {
  localStorage.setItem("access-token", headers["access-token"]);
  localStorage.setItem("client", headers["client"]);
  localStorage.setItem("uid", headers["uid"]);
};

export const removeAuthTokens = () => {
  localStorage.removeItem("access-token");
  localStorage.removeItem("client");
  localStorage.removeItem("uid");
};

export const setAuthHeaders = (config: InternalAxiosRequestConfig) => {
  const tokens = getAuthTokens();
  if (tokens["access-token"]) {
    config.headers["access-token"] = tokens["access-token"] || "";
    config.headers["client"] = tokens["client"] || "";
    config.headers["uid"] = tokens["uid"] || "";
  }
  return config;
};
