import { Marketplace } from "@components/erin/market/Marketplace";
import {GetServerSideProps, GetServerSidePropsContext} from "next";

export default function HomePage() {
    return (
        <div>
            <Marketplace />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {

  return {
    props: {},
  };
};
