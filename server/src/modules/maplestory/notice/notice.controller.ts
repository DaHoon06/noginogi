import { Controller, Get } from '@nestjs/common';
import { NoticeService } from '@modules/maplestory/notice/notice.service';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';

@Controller('maplestory/notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get()
  async sayHello(): Promise<NoticeListDto[]> {
    return this.noticeService.getNoticeList();
  }
}
