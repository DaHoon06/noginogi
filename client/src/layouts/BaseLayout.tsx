"use client";

import React, { ReactElement } from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";
import styled from "@emotion/styled";
import { Footer } from "./Footer";
import { useBreakpointValue } from "@chakra-ui/react";

const Main = styled.main`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  min-height: calc(100vh - 130px);

  &:hover {
    background-color: #005bb5;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 200px;
  transition: margin-left 0.3s ease;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <SideBar item={null} isMobile={isMobile || false} />
      <Container>
        <Header isMobile={isMobile || false} />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
};
