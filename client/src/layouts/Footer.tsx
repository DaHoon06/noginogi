import styled from "@emotion/styled";
import { ReactElement } from "react";

const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #ccc;
`;

export const Footer = (): ReactElement => {
  return (
    <FooterContainer>
      <div>푸터 입니다.</div>
    </FooterContainer>
  );
};
