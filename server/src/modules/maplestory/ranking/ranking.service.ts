import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { createAxiosInstance } from '@common/lib/axios';
import { cacheKey } from './constant';
import { overallRankingListPath } from './api';
import { OverallRankingQueryStringDto } from './dto/ranking.query.dto';

@Injectable()
export class RankingService {
  private readonly logger = new Logger(RankingService.name);
  private readonly axios: AxiosInstance;

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {
    const apiKey = configService.get<string>('MAPLESTORY_API_KEY') as string;
    const baseURL = configService.get<string>('NEXT_API_PATH') as string;
    this.axios = createAxiosInstance(
      {
        baseURL,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      apiKey,
    );
  }

  async overallRankingList(queries: OverallRankingQueryStringDto) {
    const cacheData = await this.cacheManager.get(cacheKey.overallRanking);
    console.log(cacheData, '캐시 데이터 존재합니다.');
    if (!cacheData) {
      const url = `${overallRankingListPath}?date=2024-12-13`;
      const result = await this.axios.get(url);
      console.log(result.data);
      console.log('캐시 데이터가 존재하지 않습니다.');
    }
  }

  async unionRankingList() {}

  async guildRankingList() {}

  async dojangRankingList() {}

  async theSeedRankingList() {}

  async achievementRankingList() {}
}
