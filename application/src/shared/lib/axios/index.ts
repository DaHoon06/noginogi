import {IS_PROD, MABINOGI_API_KEY, NEXON_API_HOST} from "@shared/config/processEnv";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import * as process from "process";

const HOST = IS_PROD
  ? (process.env.NEXT_PUBLIC_HOST as string)
  : ("http://localhost:3000" as string);

const headers = {
  "Content-Type": "application/json",
};

const createAxiosInstance = (
  basePath: string,
  targetServer: string
): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${targetServer}${basePath}`,
    headers,
    timeout: 100000,
    withCredentials: true,
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

// 서버 프리픽스
const SERVER_PREFIX = `/api`;

// 기본 api 인스턴스
export const axiosInstance = createAxiosInstance(SERVER_PREFIX, HOST);


export const nexonApiAxiosInstance = axios.create({
  baseURL: `${NEXON_API_HOST}`,
  headers: {
    "Content-Type": "application/json",
    'x-nxopen-api-key': MABINOGI_API_KEY,
  }
})
