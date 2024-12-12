'use client';

import React, { ReactElement } from 'react';
import { Header } from './Header';
import styled from '@emotion/styled';
import { Footer } from './Footer';
import { useBreakpointValue, useColorMode } from '@chakra-ui/react';

const Main = styled.main`
  color: #222;
  border: none;
  font-size: 16px;
  min-height: calc(100vh - 130px);
`;

const MainWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: margin-left 0.3s ease;
`;

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === 'dark';

  return (
    <Container className={isDarkMode ? 'bg-black-4' : 'bg-primary'}>
      <Header isMobile={isMobile || false} />
      <Main>
        <MainWrapper>{children}</MainWrapper>
      </Main>
      <Footer />
    </Container>
  );
};
