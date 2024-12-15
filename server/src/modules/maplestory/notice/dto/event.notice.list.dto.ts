import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EventNoticeListDto {
  @IsString()
  title: string;

  @IsString()
  url: string;

  @IsNumber()
  @IsNotEmpty()
  notice_id: number;

  @IsDate()
  @IsOptional()
  event_start_date: Date;

  @IsDate()
  @IsOptional()
  event_end_date: Date;
}
