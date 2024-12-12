import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Notice } from '@modules/maplestory/notice/entities/notice.entity';
import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';

@Injectable()
export class NoticeRepository extends Repository<Notice> {
  constructor(private readonly dataSource: DataSource) {
    super(Notice, dataSource.createEntityManager());
  }

  findNoticeList(): Promise<NoticeListDto[]> {
    return this.createQueryBuilder('notice')
      .limit(20)
      .orderBy('date', 'DESC')
      .getMany()
      .then((notices) =>
        notices.map(({ title, url, date, notice_id }) => ({
          title,
          url,
          date,
          notice_id,
        })),
      );
  }
}
