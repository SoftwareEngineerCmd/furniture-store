import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { stringify } from "qs";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL ?? ""
    : "/";

const userAuthURL = baseURL + "api/user";

export const httpClient = axios.create({
  baseURL,
  paramsSerializer: {
    serialize: (params) => {
      return stringify(params, { skipNulls: true });
    },
  },
});

export const userAuthClient = axios.create({
  baseURL: userAuthURL,
});

userAuthClient.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  } else {
    delete config.headers.Authorization; // remove if null
  }
  return config;
});

export const queryOperations = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
