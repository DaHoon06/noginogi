import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

// 리다이렉트 URL
const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL as string;
// 도메인
const domain = process.env.NEXT_PUBLIC_DOMAIN as string;
// v2 백엔드 연결
const BaseUrl = process.env.NEXT_PUBLIC_HOST as string;
// 유니서베이 본진 백엔드 직접 연결
const originBaseUrl = process.env.NEXT_PUBLIC_PLATFORM_SERVER_HOST as string;

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
    // 클라이언트 사이드
    if (typeof window !== "undefined") {
      const { getCookie } = useCookies();
      const token = getCookie<string>("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    //todo 서버사이드에서 토큰이 실리지 않으므로 처리 필요
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      if (response && response.status === 401) {
        if (typeof window !== "undefined") {
          // 클라이언트 사이드
          const { removeCookie } = useCookies();
          removeCookie("token", {
            domain,
            path: "/",
          });
          removeCookie("user", {
            domain,
            path: "/",
          });
          window.location.replace(`${redirectUrl}/logout`);
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

// 서버 프리픽스
const SERVER_PREFIX = `/v2/api`;

// 기본 api 인스턴스
export const axiosInstance = createAxiosInstance(SERVER_PREFIX, BaseUrl);

// legacy api 인스턴스
export const legacyAxiosInstance = createAxiosInstance(
  `${SERVER_PREFIX}/legacy`,
  BaseUrl,
);

// 유니서베이 본 플랫폼 백엔드 서버
export const axiosOriginInstance = createAxiosInstance("/api", originBaseUrl);
