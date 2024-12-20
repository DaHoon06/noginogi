import { Module } from '@nestjs/common';
import { NoticeController } from '@modules/maplestory/notice/notice.controller';
import { NoticeService } from '@modules/maplestory/notice/notice.service';
import { NoticeRepositories } from '@modules/maplestory/notice/repositories';
import { CreateNoticeService } from '@modules/maplestory/notice/create.notice.service';

@Module({
  imports: [],
  controllers: [NoticeController],
  providers: [CreateNoticeService, NoticeService, ...NoticeRepositories],
  exports: [],
})
export class NoticeModule {}
