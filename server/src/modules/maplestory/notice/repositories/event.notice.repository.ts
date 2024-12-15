import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EventNotice } from '@modules/maplestory/notice/entities/event.notice.entity';
import { EventNoticeListDto } from '../dto/event.notice.list.dto';

@Injectable()
export class EventNoticeRepository extends Repository<EventNotice> {
  constructor(private readonly dataSource: DataSource) {
    super(EventNotice, dataSource.createEntityManager());
  }

  findEventNoticeList(): Promise<EventNoticeListDto[]> {
    return this.createQueryBuilder('event_notice')
      .limit(10)
      .getMany()
      .then((notices) =>
        notices.map((notice) => {
          const { date_event_start, date_event_end } = notice;

          return {
            ...notice,
            event_start_date: date_event_start,
            event_end_date: date_event_end,
          };
        }),
      );
  }
}
