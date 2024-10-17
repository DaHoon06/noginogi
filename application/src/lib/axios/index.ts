import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

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
export const axiosInstance = createAxiosInstance(SERVER_PREFIX, 'http://localhost:3000');

