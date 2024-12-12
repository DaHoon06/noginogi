import { NoticeListDto } from '@modules/maplestory/notice/dto/notice.list.dto';
import { IsDate, IsString } from 'class-validator';

export class CreateNoticeDto extends NoticeListDto {}

export class CreateCashshopNoticeDto extends NoticeListDto {
  @IsDate()
  date_sale_start: Date;

  @IsDate()
  date_sale_end: Date;

  @IsString()
  ongoing_flag: string;
}

export class CreateEventNoticeListDto extends NoticeListDto {
  @IsDate()
  date_event_start: Date;

  @IsDate()
  date_event_end: Date;
}

export class CreateUpdateNoticeListDto extends NoticeListDto {}
