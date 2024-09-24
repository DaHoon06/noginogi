import { NogiLogo } from "@components/common/logo/NogiLogo";
import { ErinTimer } from "@components/erin/timer/ErinTimer";
import styled from "styled-components";

const HeaderLayout = styled.header`
  height: 100px;
  border-bottom: 1px solid black;
  padding: 0.8em 1em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
`;

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <NogiLogo />
        <ErinTimer />
      </HeaderContainer>
    </HeaderLayout>
  );
};
