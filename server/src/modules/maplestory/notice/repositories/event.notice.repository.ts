import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EventNotice } from '@modules/maplestory/notice/entities/event.notice.entity';

@Injectable()
export class EventNoticeRepository extends Repository<EventNotice> {
  constructor(private readonly dataSource: DataSource) {
    super(EventNotice, dataSource.createEntityManager());
  }
}
