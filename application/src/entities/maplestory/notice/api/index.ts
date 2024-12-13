import { axiosInstance } from '@shared/lib';
import { AxiosResponse } from 'axios';
import { ResponseEventNoticeListType, ResponseNoticeListType, ResponseCashshopNoticeListType, ResponseUpdateNoticeListType } from '@entities/maplestory/notice/typings';

/**
 * @description 공지글 조회 
 * */
export const noticeListApi = async (): Promise<ResponseNoticeListType[]> => {
  const url = '/maplestory/notice/list';
  const result: AxiosResponse<{ data: ResponseNoticeListType[] }> =
    await axiosInstance.get(url);
  return result.data.data;
};
/**
 * @description 이벤트 조회 
 * */
export const eventNoticeListApi = async (): Promise<ResponseEventNoticeListType[]> => {
  const url = '/maplestory/notice/event/list';
  const result: AxiosResponse<{data: ResponseEventNoticeListType[]}> = await axiosInstance.get(url);
  return result.data.data;
}
/**
 * @description 캐시샵 업데이트 조회 
 * */
export const cashshopNoticeListApi = async (): Promise<ResponseCashshopNoticeListType[]> => {
  const url = '/maplestory/notice/cashshop/list';
  const result: AxiosResponse<{data: ResponseCashshopNoticeListType[]}> = await axiosInstance.get(url);
  return result.data.data;
}
/**
 * @description 업데이트 내역 조회 
 * */
export const updateNoticeListApi = async (): Promise<ResponseUpdateNoticeListType[]> => {
  const url = '/maplestory/notice/update/list';
  const result: AxiosResponse<{data: ResponseUpdateNoticeListType[]}> = await axiosInstance.get(url);
  return result.data.data;
}

