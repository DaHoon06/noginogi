import { Module } from '@nestjs/common';
import { NoticeModule } from '@modules/maplestory/notice/notice.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [NoticeModule, RankingModule],
})
export class MaplestoryModule {}
