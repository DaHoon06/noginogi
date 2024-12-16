import { Module } from '@nestjs/common';
import { NoticeModule } from '@modules/maplestory/notice/notice.module';
import { RankingModule } from './ranking/ranking.module';
import { ChannelModule } from './channel/channel.module';

@Module({
  imports: [NoticeModule, RankingModule, ChannelModule],
})
export class MaplestoryModule {}
