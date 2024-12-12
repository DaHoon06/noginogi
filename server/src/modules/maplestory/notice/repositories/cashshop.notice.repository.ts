import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CashShop } from '@modules/maplestory/notice/entities/cashshop.notice.entity';

@Injectable()
export class CashshopNoticeRepository extends Repository<CashShop> {
  constructor(private readonly dataSource: DataSource) {
    super(CashShop, dataSource.createEntityManager());
  }
}
