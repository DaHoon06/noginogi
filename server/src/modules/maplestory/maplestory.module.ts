import { Module } from '@nestjs/common';
import { NoticeModule } from '@modules/maplestory/notice/notice.module';

@Module({
  imports: [NoticeModule],
})
export class MaplestoryModule {}
