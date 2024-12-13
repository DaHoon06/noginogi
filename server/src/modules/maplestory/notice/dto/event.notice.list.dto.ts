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
  eventStartDate: Date;

  @IsDate()
  @IsOptional()
  evebtEndDate: Date;
}
