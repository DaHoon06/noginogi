import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CashshopNoticeListDto {
  @IsString()
  title: string;

  @IsString()
  url: string;

  @IsNumber()
  @IsNotEmpty()
  notice_id: number;

  @IsDate()
  @IsOptional()
  sale_start_date: Date;

  @IsDate()
  @IsOptional()
  sale_end_date: Date;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  ongoing_flag: boolean;
}
