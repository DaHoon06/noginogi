import { Controller, Get, Query } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { OverallRankingQueryStringDto } from './dto/ranking.query.dto';

@Controller('maplestory/ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}
  // 종합 랭킹
  @Get('/overall')
  overallRankingList(@Query() queries: OverallRankingQueryStringDto) {
    return this.rankingService.overallRankingList(queries);
  }

  // 유니온 랭킹
  @Get('/union')
  unionRankingList() {}

  // 길드 랭킹
  @Get('/guild')
  guildRankingList() {}

  // 무릉도장 랭킹
  @Get('/dojang')
  dojangRankingList() {}

  // 더 시드 랭킹
  @Get('/dojang')
  theSeedRankingList() {}

  // 업적 랭킹
  @Get('/achievement')
  achievementRankingList() {}
}
