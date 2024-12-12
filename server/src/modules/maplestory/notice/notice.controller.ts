import { Controller, Get } from '@nestjs/common';
import { NoticeService } from '@modules/maplestory/notice/notice.service';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';

@Controller('maplestory/notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get('/list')
  async noticeList(): Promise<NoticeListDto[]> {
    return this.noticeService.getNoticeList();
  }

  @Get('/cashshop/list')
  async cashshopNoticeList() {
    return this.noticeService.getCashshopNoticeList();
  }

  @Get('/event/list')
  async eventNoticeList() {
    return this.noticeService.getEventNoticeList();
  }
}
