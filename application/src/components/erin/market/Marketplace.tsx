import {ReactElement, useEffect, useState} from "react";
import styled from "styled-components";
import { TableLayout, CardLayout } from "@components/erin/market/layouts";

export const MarketplaceLayout = styled.article``;

export const Layout = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 1em;
  margin: 0 auto;
`;

export const Marketplace = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MarketplaceLayout>
      <h1>
        마비노기 경매장
      </h1>

      <Layout>
        {isMobile ? (<CardLayout />) : (<TableLayout />)}
      </Layout>
    </MarketplaceLayout>
  );
};
