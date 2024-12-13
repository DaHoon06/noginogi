import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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
  saleStartDate: Date;

  @IsDate()
  @IsOptional()
  saleEndDate: Date;
}