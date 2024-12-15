import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { UpdateNotice } from '@modules/maplestory/notice/entities/update.notice.entity';
import { UpdateNoticeList } from '../dto/update.notice.list.dto';

@Injectable()
export class UpdateNoticeRepository extends Repository<UpdateNotice> {
  constructor(private readonly dataSource: DataSource) {
    super(UpdateNotice, dataSource.createEntityManager());
  }

  findUpdateNoticeList(): Promise<UpdateNoticeList[]> {
    return this.createQueryBuilder('update_notice')
      .limit(10)
      .orderBy('date', 'DESC')
      .getMany()
      .then((notices) =>
        notices.map((notice) => {
          const { title, date, notice_id, url } = notice;
          return {
            title,
            date,
            notice_id,
            url,
            type: '공지'
          };
        }),
      );
  }
}
