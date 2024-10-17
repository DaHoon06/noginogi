import { Marketplace } from "@components/erin/market/Marketplace";
import {WorldChatList} from "@components/erin/world-chat/WorldChatList";

export default function HomePage() {
  return (
    <div>
      <WorldChatList/>
      <Marketplace/>
    </div>
  )
    ;
}
