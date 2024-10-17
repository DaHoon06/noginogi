import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

const NogiLogoLayout = styled.div<{$width: number}>`
  width: ${({$width}) => $width}px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface NogiLogoProps {
  isMobile?: boolean;
}

export const NogiLogo = ({isMobile}: NogiLogoProps): ReactElement => {
  const width = isMobile ? 60 : 120;

  return (
    <NogiLogoLayout $width={isMobile ? 70 : 90}>
      <Image
        src={"/images/noginogi.svg"}
        width={width}
        height={100}
        alt={"노기노기"}
      />
    </NogiLogoLayout>
  );
};
