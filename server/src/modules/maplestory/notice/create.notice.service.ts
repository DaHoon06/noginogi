import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NoticeRepository } from '@modules/maplestory/notice/repositories/notice.repository';
import { UpdateNoticeRepository } from '@modules/maplestory/notice/repositories/update.notice.repository';
import { EventNoticeRepository } from '@modules/maplestory/notice/repositories/event.notice.repository';
import { CashshopNoticeRepository } from '@modules/maplestory/notice/repositories/cashshop.notice.repository';
import { AxiosInstance, AxiosResponse } from 'axios';
import { createAxiosInstance } from '@common/lib';
import {
  CreateCashshopNoticeDto,
  CreateEventNoticeListDto,
  CreateNoticeDto,
  CreateUpdateNoticeListDto,
} from '@modules/maplestory/notice/dto/create.notice.dto';
import {
  cashshopNoticeListApiPath,
  eventNoticeListApiPath,
  noticeListApiPath,
  updateNoticeListApiPath,
} from '@modules/maplestory/notice/api';
@Injectable()
export class CreateNoticeService {
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

  // 공지 글 생성
  async createNoticeList(noticeList: CreateNoticeDto[]): Promise<void> {
    const result: AxiosResponse<{ notice: CreateNoticeDto[] }> =
      await this.axios.get(noticeListApiPath);
    await this.noticeRepository.insert(result.data.notice);
  }

  // 이벤트 목록 생성
  async createEventNoticeList(): Promise<void> {
    const result: AxiosResponse<{ event_notice: CreateEventNoticeListDto[] }> =
      await this.axios.get(eventNoticeListApiPath);
    await this.eventNoticeRepository.insert(result.data.event_notice);
  }

  // 캐시샵 목록 생성
  async createCashshopNoticeList(
    noticeList: CreateCashshopNoticeDto[],
  ): Promise<void> {
    const result: AxiosResponse<{
      cashshop_notice: CreateUpdateNoticeListDto[];
    }> = await this.axios.get(cashshopNoticeListApiPath);
    await this.cashshopNoticeRepository.insert(result.data.cashshop_notice);
  }

  // 업데이트 목록 생성
  async createUpdateNoticeList(
    noticeList: CreateUpdateNoticeListDto[],
  ): Promise<void> {
    const result: AxiosResponse<{
      update_notice: CreateUpdateNoticeListDto[];
    }> = await this.axios.get(updateNoticeListApiPath);
    await this.updateNoticeRepository.insert(result.data.update_notice);
  }
}
