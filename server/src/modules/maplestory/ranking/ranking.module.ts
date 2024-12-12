import { Module } from '@nestjs/common';
import { RankingController } from '@modules/maplestory/ranking/ranking.controller';
import { RankingService } from '@modules/maplestory/ranking/ranking.service';

@Module({
  imports: [],
  controllers: [RankingController],
  providers: [RankingService],
  exports: [],
})
export class RankingModule {}
