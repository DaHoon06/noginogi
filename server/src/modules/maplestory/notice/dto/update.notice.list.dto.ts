import { IsString } from 'class-validator';
import { NoticeListDto } from './notice.list.dto';

export class UpdateNoticeList extends NoticeListDto {
  @IsString()
  type: string; // enum type으로 관리?
}
