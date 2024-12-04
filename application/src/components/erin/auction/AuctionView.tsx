import { AuctionCategory } from "@components/erin/auction/AuctionCategory";
import { AuctionList } from "@components/erin/auction/AuctionList";
import styles from "./AuctionView.module.scss";

export const AuctionView = async () => {
  return (
    <div className={styles.auctionViewContainer}>
      <AuctionCategory />
      <AuctionList />
    </div>
  );
};
