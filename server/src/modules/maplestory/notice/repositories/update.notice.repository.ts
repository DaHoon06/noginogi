import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { UpdateNotice } from '@modules/maplestory/notice/entities/update.notice.entity';

@Injectable()
export class UpdateNoticeRepository extends Repository<UpdateNotice> {
  constructor(private readonly dataSource: DataSource) {
    super(UpdateNotice, dataSource.createEntityManager());
  }
}
