import { IsNumber, IsOptional, IsString } from 'class-validator';

export class OverallRankingQueryStringDto {
  @IsString()
  date: string;

  @IsString()
  @IsOptional()
  world_name?: string;

  @IsNumber()
  @IsOptional()
  world_type?: number;
}
