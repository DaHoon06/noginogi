import { axiosInstance } from "@shared/lib/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const worldChatApi = async (
  channel = "류트"
): Promise<HornBugleWorldLists[]> => {
  const { data } = await axiosInstance.get<
    AxiosRequestConfig,
    AxiosResponse<HornBugleWorldLists[]>
  >(`/world-chat?server=${channel}`);
  return data;
};
