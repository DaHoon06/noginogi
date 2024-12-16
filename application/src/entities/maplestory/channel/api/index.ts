import { axiosInstance } from '@shared/lib';

export const channelCategoriesApi = async () => {
  const url = `/maplestory/channel/list`;
  const result = await axiosInstance.get(url);
  return result.data;
};
