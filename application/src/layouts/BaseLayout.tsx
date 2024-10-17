import { StaticHeader, MobileHeader } from "./header";
import { Footer } from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import useUtilityStore from "@state/store/utilityStore";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.main<{$isScrolled: boolean}>`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 236px);
  background-color: ${({ theme }) => theme.colors.background.base};
  margin-top: ${({$isScrolled}) => $isScrolled ? 60 : 100}px;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const {isScrolled, setIsScrolled} = useUtilityStore();

  const handleScroll = ({target}: any) => {
    if (target.scrollTop > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll({target: document.body});
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <>
      <BaseContainer>
        {isScrolled ? <MobileHeader isShow={isScrolled} /> : <StaticHeader isShow={isScrolled} />}
        <Main $isScrolled={isScrolled}>
          <MainContainer>{children}</MainContainer>
        </Main>
      </BaseContainer>
      <Footer />
    </>
  );
};
