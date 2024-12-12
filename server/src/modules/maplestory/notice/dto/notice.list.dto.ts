import { IsDate, IsNumber, IsString } from 'class-validator';

export class NoticeListDto {
  @IsString()
  title: string;
  @IsString()
  url: string;
  @IsNumber()
  notice_id: number;
  @IsDate()
  date: Date;
}
