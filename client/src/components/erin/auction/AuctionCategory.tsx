'use client';

import {Fragment, ReactElement, useState} from "react";
import {data} from '@state/initialize/auctionCategories.json';
import * as S from './AuctionCategory.styled';

type SelectedAuctionCategoryType = {
  cat1: string;
  cat2: string;
  cat3: string;
}


export const AuctionCategory = (): ReactElement => {
  const [auctionCategory] = useState(data);
  const [currentCategory, setCurrentCategory] = useState<SelectedAuctionCategoryType>({
    cat1: '',
    cat2: '',
    cat3: '',
  });

  const handleCategoryClick = (label: string, step: number) => {
    setCurrentCategory((prev) => {
      const updatedCategory = { ...prev };
      if (step === 1) {
        updatedCategory.cat1 = label;
        updatedCategory.cat2 = '';
        updatedCategory.cat3 = '';
      } else if (step === 2) {
        updatedCategory.cat2 = label;
        updatedCategory.cat3 = '';
      } else {
        updatedCategory.cat3 = label;
      }
      return updatedCategory;
    });
  };

  return (
    <S.Container>
      <S.Title>카테고리 선택</S.Title>
      1. {currentCategory.cat1}
      2. {currentCategory.cat2}
      3. {currentCategory.cat3}
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
                  <S.ChildCategory key={`${label}_${item.category}_${itemIndex}`}>
                    <S.Category
                      isSelected={currentCategory?.cat2 === item.category}
                      onClick={() => handleCategoryClick(item.category, 2)}
                    >
                      {item.category}
                    </S.Category>
                    {currentCategory.cat2 === item.category && (
                      <>
                        {item.items.map((v) => (
                          <S.Item key={`${item.category}_${v.label}`} onClick={() => handleCategoryClick(v.value, 3)}>{v.label}</S.Item>
                        ))}
                      </>
                    )}
                  </S.ChildCategory>
                ))}
              </S.ChildrenContainer>
            )}
          </Fragment>
        );
      })}
    </S.Container>
  );
}
