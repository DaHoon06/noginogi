import {ReactElement, useEffect, useState} from "react";
import styled from "styled-components";
import { TableLayout, CardLayout } from "@components/erin/market/layouts";
import {SearchBar} from "@components/erin/market/serch/SearchBar";
import {Typography} from "@components/common/Typography";
import useUtilityStore from "@state/store/utilityStore";
import {SelectBox} from "@components/common/boxes";

export const MarketplaceLayout = styled.article`
  width: 100%;
  
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  height: 100%;
  padding: 1em;
  margin: 0 auto;
`;

export const FilterLayout = styled.section<{$isScrolled: boolean}>`
  background-color: white;
  width: 100%;
  position: sticky;
  top: ${({$isScrolled}) => $isScrolled ? 60 : 100}px;
  padding: 1em;
  z-index: 10;
`;

type CategoryItem = {
  label: string;
  value: string;
}

const Categories: CategoryItem[] = [
  {
  label: '조건1',
  value: '조건1',
}, {
    label: '조건2',
  value: '조건2',
}]

export const Marketplace = (): ReactElement => {
  const {isScrolled, setIsMobile, isMobile} = useUtilityStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MarketplaceLayout>
        <FilterLayout $isScrolled={isScrolled}>
          {/*TODO 필터 팝업*/}
          <SelectBox options={Categories} onChange={() => {}} />
          <div>
            <SearchBar keyword={''} onAddKeyword={() => {}} />
            <button type={'submit'}>
              검색
            </button>
          </div>

        </FilterLayout>

        <Layout>
          <Typography variant={"h1"} $fontWeight={600}>
            마비노기 경매장
          </Typography>

          {isMobile ? (<CardLayout />) : (<TableLayout />)}
        </Layout>
      </MarketplaceLayout>
    </>

  );
};
