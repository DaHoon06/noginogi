import { noticeListApi, eventNoticeListApi, updateNoticeListApi, cashshopNoticeListApi } from "@entities/maplestory/notice/api"
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query"
import { queryKeys } from "../../constant"
import { AxiosError } from "axios";
import { CashshopNoticeListType, EventNoticeListType, NoticeListType, UpdateNoticeListType } from "../../typings";

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;


type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export const useNoticeQuery = (queryOptions?: UseQueryCustomOptions<NoticeListType[], NoticeListType[]>) => {
  return useQuery<NoticeListType[], ResponseError>({
    queryKey: [queryKeys.notice.list],
    queryFn: noticeListApi,
    ...queryOptions
  });
}

export const useEventNoticeQuery = (queryOptions?: UseQueryCustomOptions<EventNoticeListType[], EventNoticeListType[]>) => {
  return useQuery<EventNoticeListType[], ResponseError>({
    queryKey: [queryKeys.notice.eventList],
    queryFn: eventNoticeListApi,
    ...queryOptions
  });
}

export const useUpdateNotcieQuery = (queryOptions?: UseQueryCustomOptions<UpdateNoticeListType[], UpdateNoticeListType[]>) => {
  return useQuery<UpdateNoticeListType[], ResponseError>({
    queryKey: [queryKeys.notice.updateList],
    queryFn: updateNoticeListApi,
    ...queryOptions
  });
}

export const useCashshopNoticeQuery = (queryOptions?: UseQueryCustomOptions<CashshopNoticeListType[], CashshopNoticeListType[]>) => {
  return useQuery<CashshopNoticeListType[], ResponseError>({
    queryKey: [queryKeys.notice.cashshopList],
    queryFn: cashshopNoticeListApi,
    ...queryOptions
  });
}