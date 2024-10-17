import { Marketplace } from "@components/erin/market/Marketplace";
import { WorldChatList } from "@components/erin/world-chat/WorldChatList";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function HomePage() {
  return (
    <div>
      <WorldChatList/>
      <Marketplace/>
    </div>
  )
    ;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {

  return {
    props: {},
  };
};
