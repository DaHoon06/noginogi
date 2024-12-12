import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance, AxiosResponse } from 'axios';
import { createAxiosInstance } from '@common/lib';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';
import { NoticeRepository } from '@modules/maplestory/notice/repositories/notice.repository';
import { UpdateNoticeRepository } from '@modules/maplestory/notice/repositories/update.notice.repository';
import { EventNoticeRepository } from '@modules/maplestory/notice/repositories/event.notice.repository';
import { CashshopNoticeRepository } from '@modules/maplestory/notice/repositories/cashshop.notice.repository';

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

  async getNoticeList(): Promise<NoticeListDto[]> {
    return this.noticeRepository.findNoticeList();
  }

  async getCashshopNoticeList() {}

  async getEventNoticeList() {}
}
