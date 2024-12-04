"use client";

import { Fragment, ReactElement, useState } from "react";
import { data } from "@state/initialize/auctionCategories.json";
import * as S from "./AuctionCategory.styled";

type SelectedAuctionCategoryType = {
  cat1: string;
  cat2: string;
};

export const AuctionCategory = (): ReactElement => {
  const [auctionCategory] = useState(data);
  const [currentCategory, setCurrentCategory] =
    useState<SelectedAuctionCategoryType>({
      cat1: "",
      cat2: "",
    });

  const handleCategoryClick = (label: string, step: number) => {
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
