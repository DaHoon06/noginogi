import { ReactElement } from "react";
import { NavBar } from "./NavBar";

export const Header = ({isMobile}: {isMobile: boolean}): ReactElement => {
  return (
    <header>
      <NavBar isMobile={isMobile} />
    </header>
  );
};
