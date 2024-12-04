import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {queryKeys} from "@state/queries/key";
import {AxiosError} from "axios";
import {worldChatApi} from "@api/world.chat.api";

export const useWorldChatQuery = (channel: string ): any => {
  return useQuery({
    queryKey: [queryKeys.wordChatKeys.hornBugleLists, channel],
    queryFn: () => worldChatApi(channel),
    placeholderData: (previousData) => previousData,
    gcTime: 1000 * 60 * 5,
    staleTime: 60 * 1000,
  })
}

export const useWorldChatInfinityScroll = (perPage: number, data: HornBugleWorldLists[]) => {
  return useInfiniteQuery<HornBugleWorldLists[], AxiosError>({
    queryKey: [queryKeys.wordChatKeys.hornBugleInfinityScrollList, data],
    queryFn: async ({pageParam = 1}) => {
      try {
        const page = pageParam as unknown as number;
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        return data.slice(startIndex, endIndex);
      } catch (e) {
        const error = e as AxiosError;
        if (error.response && error.response.data) {
          const { statusCode, message } = error.response.data as {
            statusCode: number;
            message: string;
          };
          if (statusCode === 404) {
            return [];
          }
        }
        throw e;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
    placeholderData: (previousData) => previousData,
  })
}
