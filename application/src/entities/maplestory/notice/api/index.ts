import { axiosInstance } from '@shared/lib';
import { AxiosResponse } from 'axios';
import { ResponseNoticeListType } from '@entities/maplestory/notice/typings';

export const noticeListApi = async () => {
  const result: AxiosResponse<{ data: ResponseNoticeListType[] }> =
    await axiosInstance.get('/maplestory/notice');
  return result.data.data;
};
