import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CashShop } from '@modules/maplestory/notice/entities/cashshop.notice.entity';
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
            sale_start_date: null,
            sale_end_date: null,
            ongoing_flag: null,
          };

          if (notice?.date_sale_start)
            returnObj.sale_start_date = notice.date_sale_start;
          if (notice?.date_sale_end)
            returnObj.sale_end_date = notice.date_sale_end;
          if (notice?.ongoing_flag)
            returnObj.ongoing_flag = notice.ongoing_flag === 'true';

          return returnObj;
        }),
      );
  }
}
