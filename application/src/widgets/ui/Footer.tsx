import styled from '@emotion/styled';
import { ReactElement } from 'react';

const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = (): ReactElement => {
  return (
    <FooterContainer>
      <p>Copyright 2024. dahoon06 all rights reserved.</p>
    </FooterContainer>
  );
};
