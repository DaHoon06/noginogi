import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance, AxiosResponse } from 'axios';
import { createAxiosInstance } from '@common/lib';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';
import { NoticeRepository } from '@modules/maplestory/notice/repositories/notice.repository';
import { UpdateNoticeRepository } from '@modules/maplestory/notice/repositories/update.notice.repository';
import { EventNoticeRepository } from '@modules/maplestory/notice/repositories/event.notice.repository';
import { CashshopNoticeRepository } from '@modules/maplestory/notice/repositories/cashshop.notice.repository';
import { CreateNoticeService } from './create.notice.service';

@Injectable()
export class NoticeService {
  private readonly axios: AxiosInstance;

  constructor(
    private readonly createNoticeService: CreateNoticeService,
    private readonly configService: ConfigService,
    private readonly noticeRepository: NoticeRepository,
    private readonly updateNoticeRepository: UpdateNoticeRepository,
    private readonly eventNoticeRepository: EventNoticeRepository,
    private readonly cashshopNoticeRepository: CashshopNoticeRepository,
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

  async createNoticeList(): Promise<void> {
    const promiseAll = [
      this.createNoticeService.createCashshopNoticeList(),
      this.createNoticeService.createEventNoticeList(),
      this.createNoticeService.createNoticeList(),
      this.createNoticeService.createUpdateNoticeList(),
    ];

    await Promise.all(promiseAll);
    console.log('Add data Completed!');
  }

  async getNoticeList(): Promise<NoticeListDto[]> {
    return this.noticeRepository.findNoticeList();
  }

  async getCashshopNoticeList() {
    return [];
  }

  async getEventNoticeList() {
    return [];
  }

  async getUpdateNoticeList() {
    return [];
  }
}
