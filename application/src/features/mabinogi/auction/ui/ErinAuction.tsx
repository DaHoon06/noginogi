'use client';

import styles from './ErinAuction.module.scss';
import { useState } from 'react';
import {
  AuctionCategoryType,
  SelectedAuctionCategoryType,
} from '@features/mabinogi/erin/typings';
import {
  SearchBar,
  AuctionCategory,
  AuctionList,
} from '@entities/mabinogi/erin/ui';

export const ErinAuction = () => {
  const [itemName, setItemName] = useState('');
  const [currentCategory, setCurrentCategory] =
    useState<SelectedAuctionCategoryType>({
      cat1: '',
      cat2: '',
    });

  const onClickCategory = (label: string, step: number) => {
    setCurrentCategory((prev) => {
      const updatedCategory = { ...prev };
      if (step === 1) {
        updatedCategory.cat1 = label;
        updatedCategory.cat2 = '';
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
