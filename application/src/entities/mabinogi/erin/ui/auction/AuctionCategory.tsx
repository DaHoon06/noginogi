'use client';

import React, { Fragment, ReactElement, useCallback, useState } from 'react';
import { data } from '@shared/state/initialize/auctionCategories.json';
import * as S from './AuctionCategory.styled';
import { SelectedAuctionCategoryType } from '@features/mabinogi/erin/typings/auction';

interface AuctionCategoryProps {
  currentCategory: SelectedAuctionCategoryType;
  onClickCategory: (label: string, step: number) => void;
}

const AuctionCategory = (props: AuctionCategoryProps): ReactElement => {
  const { currentCategory, onClickCategory } = props;
  const [auctionCategory] = useState(data);

  const handleCategoryClick = useCallback((label: string, step: number) => {
    onClickCategory(label, step);
  }, []);

  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      {auctionCategory.map((category, categoryIndex) => {
        const { label, children } = category;
        return (
          <Fragment key={`${label}_${categoryIndex}`}>
            <S.Category
              isSelected={currentCategory?.cat1 === label}
              onClick={() => handleCategoryClick(label, 1)}
            >
              {label}
            </S.Category>
            {currentCategory.cat1 === label && (
              <S.ChildrenContainer>
                {children.map((item, itemIndex) => (
                  <S.ChildCategory key={`${label}_${item.label}_${itemIndex}`}>
                    <S.Category
                      isSelected={currentCategory?.cat2 === item.label}
                      onClick={() => handleCategoryClick(item.label, 2)}
                    >
                      {item.label}
                    </S.Category>
                  </S.ChildCategory>
                ))}
              </S.ChildrenContainer>
            )}
          </Fragment>
        );
      })}
    </S.Container>
  );
};

export default React.memo(AuctionCategory);
