import { axiosInstance } from '@shared/lib';
import { AxiosResponse } from 'axios';
import { ResponseNoticeList } from '@entities/maplestory/notice/typings';

export const noticeListApi = async () => {
  const result: AxiosResponse<{ data: ResponseNoticeList[] }> =
    await axiosInstance.get('/maplestory/notice');
  return result.data.data;
};
