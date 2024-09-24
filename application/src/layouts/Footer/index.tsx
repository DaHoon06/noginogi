import styled from "styled-components";

const FooterLayout = styled.footer`
    height: 100px;
    border-top: 1px solid black;
`;

export const Footer = () => {
  return (
    <FooterLayout>
      <ul>
        <li>TESt</li>
      </ul>
    </FooterLayout>
  )
}
