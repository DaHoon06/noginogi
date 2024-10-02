import { Marketplace } from "@components/erin/market/Marketplace";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function HomePage() {
    return (
            <Marketplace />
    );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {

  return {
    props: {},
  };
};
