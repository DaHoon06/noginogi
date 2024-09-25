import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";

const NogiLogoLayout = styled.div`
  width: 90px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NogiLogo = (): ReactElement => {
  return (
    <NogiLogoLayout>
      <Image
        src={"/images/noginogi.svg"}
        width={120}
        height={100}
        alt={"노기노기"}
      />
    </NogiLogoLayout>
  );
};
