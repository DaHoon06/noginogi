import { ReactElement } from "react";
import { NavBar } from "./NavBar";
import styles from "./Header.module.scss";

export const Header = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavBar isMobile={isMobile} />
      </div>
    </header>
  );
};
