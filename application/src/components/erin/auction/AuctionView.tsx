import { AuctionCategory } from "@components/erin/auction/AuctionCategory";
import { AuctionList } from "@components/erin/auction/AuctionList";
import styles from "./AuctionView.module.scss";
import { auctionListApi } from "@api/auction.api";
import { queryClient } from "@lib/tanstack";
import { queryKeys } from "@state/queries/key";

export const AuctionView = async () => {
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.auction.list],
    queryFn: () => auctionListApi({ auction_item_category: "기타" }),
  });

  return (
    <div className={styles.auctionViewContainer}>
      <AuctionCategory />
      <AuctionList />
    </div>
  );
};
