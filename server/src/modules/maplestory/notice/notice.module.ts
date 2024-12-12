import { Module } from '@nestjs/common';
import { NoticeController } from '@modules/maplestory/notice/notice.controller';
import { NoticeService } from '@modules/maplestory/notice/notice.service';
import { NoticeRepositories } from '@modules/maplestory/notice/repositories';

@Module({
  imports: [],
  controllers: [NoticeController],
  providers: [NoticeService, ...NoticeRepositories],
  exports: [],
})
export class NoticeModule {}
