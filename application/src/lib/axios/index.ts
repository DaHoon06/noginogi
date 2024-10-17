import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import * as process from "process";

const IS_PROD = process.env.NODE_ENV === 'production';
const HOST = IS_PROD ? process.env.NEXT_PUBLIC_HOST : 'http://localhost:3000';

const headers = {
  "Content-Type": "application/json",
};

const createAxiosInstance = (
  basePath: string,
  targetServer: string,
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
    },
  );

  return instance;
};

// 서버 프리픽스
const SERVER_PREFIX = `/api`;

// 기본 api 인스턴스
export const axiosInstance = createAxiosInstance(SERVER_PREFIX, HOST);

