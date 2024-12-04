"use client";

import { AuctionCategory } from "@components/erin/auction/AuctionCategory";
import { AuctionList } from "@components/erin/auction/AuctionList";
import styles from "./AuctionView.module.scss";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { AuctionCategoryType } from "@type/interfaces/auction";

export type SelectedAuctionCategoryType = {
  cat1: string;
  cat2: string;
};

export const AuctionView = () => {
  const [itemName, setItemName] = useState("");
  const [currentCategory, setCurrentCategory] =
    useState<SelectedAuctionCategoryType>({
      cat1: "",
      cat2: "",
    });

  const onClickCategory = (label: string, step: number) => {
    setCurrentCategory((prev) => {
      const updatedCategory = { ...prev };
      if (step === 1) {
        updatedCategory.cat1 = label;
        updatedCategory.cat2 = "";
      } else if (step === 2) {
        updatedCategory.cat2 = label;
      }
      return updatedCategory;
    });
  };
  const onChangeItemName = (name: string) => {
    setItemName(name);
  };

  return (
    <div className={styles.auctionViewContainer}>
      <AuctionCategory
        currentCategory={currentCategory}
        onClickCategory={onClickCategory}
      />
      <div className={styles.listContainer}>
        <SearchBar onChangeItemName={onChangeItemName} itemName={itemName} />
        <AuctionList
          itemName={itemName}
          itemCategory={currentCategory.cat2 as AuctionCategoryType}
        />
      </div>
    </div>
  );
};
