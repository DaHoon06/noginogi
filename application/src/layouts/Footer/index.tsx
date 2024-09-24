import styled from "styled-components";

const FooterLayout = styled.footer`
  width: 100%;
  height: 136px;
  border-top: 1px solid black;
  background-color: #222;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  color: #fbfbfb;
`;

export const Footer = () => {
  return (
    <FooterLayout>
      <FooterContainer>
        <ul>
          <li>Copyright 2024. Developer Dahoon06 All Rights Reserved.</li>
          <li>Creator by @류트/함쎄려</li>
        </ul>
      </FooterContainer>
    </FooterLayout>
  );
};
