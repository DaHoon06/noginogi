import {ReactElement} from "react";
import styled from "styled-components";
import Link from "next/link";
import {NogiLogo} from "@components/common/logo/NogiLogo";
import {ErinTimer} from "@components/erin/timer/ErinTimer";
import { AnimatePresence, motion } from "framer-motion";

const HeaderLayout = styled(motion.header)`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  padding: 0.8em 1em;
  background-color: ${({ theme }) => theme.colors.background.header};  // 스크롤 시 배경색이 약간 투명하게 변경됨
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
`;

interface MobileHeaderProps {
  isShow: boolean;
}

export const MobileHeader = ({isShow}: MobileHeaderProps): ReactElement => {
  return (
    <AnimatePresence>
      {isShow && (
        <HeaderLayout
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.25 }}
        >
          <HeaderContainer>
            <Link href={'/'}>
              <NogiLogo isMobile={true} />
            </Link>
            <ErinTimer />
          </HeaderContainer>
          {/*메뉴 버튼 및 드랍다운*/}
        </HeaderLayout>
      )}
    </AnimatePresence>

  )
}