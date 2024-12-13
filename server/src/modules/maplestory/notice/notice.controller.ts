import { Controller, Get, Post } from '@nestjs/common';
import { NoticeService } from '@modules/maplestory/notice/notice.service';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';
import { EventNoticeListDto } from './dto/event.notice.list.dto';
import { CashshopNoticeListDto } from './dto/cashshop.notice.list.dto';

@Controller('maplestory/notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post('/add/data')
  async createNoticeData() {
    return this.noticeService.createNoticeList();
  }

  @Get('/list')
  async noticeList(): Promise<NoticeListDto[]> {
    return this.noticeService.getNoticeList();
  }

  @Get('/cashshop/list')
  async cashshopNoticeList(): Promise<CashshopNoticeListDto[]> {
    return this.noticeService.getCashshopNoticeList();
  }

  @Get('/event/list')
  async eventNoticeList(): Promise<EventNoticeListDto[]> {
    return this.noticeService.getEventNoticeList();
  }

  @Get('/update/list')
  async updateNoticeList() {
    return this.noticeService.getUpdateNoticeList();
  }
}
