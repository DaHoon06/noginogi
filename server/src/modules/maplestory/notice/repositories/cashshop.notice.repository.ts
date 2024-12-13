import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CashShop } from '@modules/maplestory/notice/entities/cashshop.notice.entity';
import { EventNoticeListDto } from '../dto/event.notice.list.dto';
import { CashshopNoticeListDto } from '../dto/cashshop.notice.list.dto';

@Injectable()
export class CashshopNoticeRepository extends Repository<CashShop> {
  constructor(private readonly dataSource: DataSource) {
    super(CashShop, dataSource.createEntityManager());
  }

  findCashshopNoticeList(): Promise<CashshopNoticeListDto[]> {
    return this.createQueryBuilder('cashshop_notice')
      .limit(20)
      .orderBy('date', 'DESC')
      .getMany()
      .then((notices) =>
        notices.map((notice) => {
          const { title, url, notice_id } = notice;
          const returnObj: CashshopNoticeListDto = {
            title,
            url,
            notice_id,
            saleStartDate: null,
            saleEndDate: null,
          };

          if (notice?.date_sale_start)
            returnObj.saleStartDate = notice.date_sale_start;
          if (notice?.date_sale_end)
            returnObj.saleEndDate = notice.date_sale_end;

          return returnObj;
        }),
      );
  }
}
