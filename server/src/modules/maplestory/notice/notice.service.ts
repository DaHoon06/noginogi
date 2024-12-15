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
import { EventNoticeListDto } from './dto/event.notice.list.dto';
import { CashshopNoticeListDto } from './dto/cashshop.notice.list.dto';
import { UpdateNoticeList } from './dto/update.notice.list.dto';

@Injectable()
export class NoticeService {
  constructor(
    private readonly createNoticeService: CreateNoticeService,
    private readonly noticeRepository: NoticeRepository,
    private readonly updateNoticeRepository: UpdateNoticeRepository,
    private readonly eventNoticeRepository: EventNoticeRepository,
    private readonly cashshopNoticeRepository: CashshopNoticeRepository,
  ) {}

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

  async getCashshopNoticeList(): Promise<CashshopNoticeListDto[]> {
    return this.cashshopNoticeRepository.findCashshopNoticeListWithDate();
  }

  async getEventNoticeList(): Promise<EventNoticeListDto[]> {
    return this.eventNoticeRepository.findEventNoticeList();
  }

  async getUpdateNoticeList(): Promise<UpdateNoticeList[]> {
    // 캐시샵 업데이트 내역과 일반 업데이트 내역을 하나로 관리할 수 있도록한다.

    // todo 1.  캐시샵 정보와 일반 업데이트 공지를 불어온 후 date 기준으로 정렬한다.
    // 이 때 캐시샵과 업데이트 공지의 라벨의 경우 다르게 구분하여 보여준다.
    const cashshopNotice =
      await this.cashshopNoticeRepository.findCashshopNoticeList();
    const updateNotcie =
      await this.updateNoticeRepository.findUpdateNoticeList();
    const noticeList = [...cashshopNotice, ...updateNotcie];

    // todo. 2 게시글의 개수는 6개로 한다.

    // todo. 3 캐러셀과 같이 슬라이드로 다음 게시글을 불러올 수 있도록한다.
    return noticeList.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }
}
