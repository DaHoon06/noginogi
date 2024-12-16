import { NoticeView } from '@features/maplestory';
import { OverallRankingBoard } from '@features/maplestory/ranking';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <div>
      <OverallRankingBoard />
      <NoticeView />
    </div>
  );
}
