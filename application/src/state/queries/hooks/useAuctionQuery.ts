import { RequestAuctionList } from "@type/interfaces/auction";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@state/queries/key";
import { auctionListApi } from "@apis/auction.api";

export const useAuctionListQuery = (queries: RequestAuctionList) => {
  return useQuery({
    queryKey: [queryKeys.auction, queries.auction_item_category],
    queryFn: () => auctionListApi(queries),
    placeholderData: (previousData) => previousData,
    gcTime: 1000 * 60 * 2,
    staleTime: 60 * 1000,
    retry: 1,
    refetchOnMount: false,
  });
};
