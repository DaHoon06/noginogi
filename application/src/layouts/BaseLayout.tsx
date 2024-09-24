import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import styled from "styled-components";

interface BaseLayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 236px);
  padding: 0 1em;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 1em;
`;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div>
        <Header />
        <Main>
          <MainContainer>{children}</MainContainer>
        </Main>
      </div>
      <Footer />
    </>
  );
};
