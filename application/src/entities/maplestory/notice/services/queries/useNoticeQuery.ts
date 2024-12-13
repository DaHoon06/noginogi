import { noticeListApi, eventNoticeListApi, updateNoticeListApi, cashshopNoticeListApi } from "@entities/maplestory/notice/api"
import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../constant"

export const useNoticeQuery = () => {
  useQuery({
    queryKey: [queryKeys.notice.list],
    queryFn: noticeListApi
  });
}

export const useEventNoticeQuery = () => {
  useQuery({
    queryKey: [queryKeys.notice.eventList],
    queryFn: eventNoticeListApi
  });
}

export const useUpdateNotcieQuery = () => {
  useQuery({
    queryKey: [queryKeys.notice.updateList],
    queryFn: updateNoticeListApi
  });
}

export const useCashshopNoticeQuery = () => {
  useQuery({
    queryKey: [queryKeys.notice.cashshopList],
    queryFn: cashshopNoticeListApi
  });
}