import {axiosInstance} from "@lib/axios";
import {AxiosRequestConfig, AxiosResponse} from "axios";

export const worldChatApi = async (server = '류트'): Promise<HornBugleWorldLists[]> => {
  const {data} = await axiosInstance.get<AxiosRequestConfig, AxiosResponse<HornBugleWorldLists[]>>(`/world-chat?server=${server}`);
  return data;
}
