import { AuctionCategory } from "@components/erin/auction/AuctionCategory";
import { AuctionList } from "@components/erin/auction/AuctionList";
import styles from "./AuctionView.module.scss";
import { SearchBar } from "./SearchBar";

export const AuctionView = async () => {
  return (
    <div className={styles.auctionViewContainer}>
      <AuctionCategory />
      <div>
        <SearchBar />
        <AuctionList />
      </div>
    </div>
  );
};
