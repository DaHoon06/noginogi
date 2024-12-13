import { axiosInstance } from '@shared/lib/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HornBugleWorldLists } from "@shared/typings";

export const worldChatApi = async (
  channel = '류트',
): Promise<HornBugleWorldLists[]> => {
  const response: AxiosResponse<HornBugleWorldLists[]> = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<HornBugleWorldLists[]>
  >(`/world-chat?server=${channel}`);
  return response.data;
};
