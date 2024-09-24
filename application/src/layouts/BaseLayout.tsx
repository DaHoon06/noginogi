import {Header} from "./Header";
import {Footer} from "./Footer";
import {ReactNode} from "react";
import styled from "styled-components";
import {SideMenu} from "./Nav";

interface BaseLayoutProps {
  children: ReactNode;
}

const Main = styled.main``;

export const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <SideMenu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}
