import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance, AxiosResponse } from 'axios';
import { createAxiosInstance } from '@common/lib';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';
import { NoticeRepository } from '@modules/maplestory/notice/repositories/notice.repository';
import { UpdateNoticeRepository } from '@modules/maplestory/notice/repositories/update.notice.repository';
import { EventNoticeRepository } from '@modules/maplestory/notice/repositories/event.notice.repository';
import { CashshopNoticeRepository } from '@modules/maplestory/notice/repositories/cashshop.notice.repository';
import { CreateNoticeDto } from '@modules/maplestory/notice/dto/create.notice.dto';

// /maplestory/v1/notice 공지 리스트 조회

@Injectable()
export class NoticeService {
  private readonly axios: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
    private noticeRepository: NoticeRepository,
    private updateNoticeRepository: UpdateNoticeRepository,
    private eventNoticeRepository: EventNoticeRepository,
    private cashshopNoticeRepository: CashshopNoticeRepository,
  ) {
    const apiKey = configService.get<string>('MAPLESTORY_API_KEY') as string;
    this.axios = createAxiosInstance(
      {
        baseURL: `https://open.api.nexon.com`,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      apiKey,
    );
  }

  async getNoticeList(): Promise<NoticeListDto[]> {
    return this.noticeRepository.findNoticeList();
  }

  // 공지 글 생성
  async createNoticeList(noticeList: CreateNoticeDto[]) {
    await this.noticeRepository.insert(noticeList);
  }
}
