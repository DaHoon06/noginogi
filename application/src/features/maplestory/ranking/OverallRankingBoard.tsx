import { ChannelList } from '@entities/maplestory/channel/ui/ChannelList';

export const OverallRankingBoard = () => {
  return (
    <div>
      <ChannelList />
      <select>
        <option>2024-12-16</option>
      </select>
      <div>종합 랭킹</div>
    </div>
  );
};
