import { NoticeRepository } from '@modules/maplestory/notice/repositories/notice.repository';
import { UpdateNoticeRepository } from '@modules/maplestory/notice/repositories/update.notice.repository';
import { EventNoticeRepository } from '@modules/maplestory/notice/repositories/event.notice.repository';
import { CashshopNoticeRepository } from '@modules/maplestory/notice/repositories/cashshop.notice.repository';

export const NoticeRepositories = [
  NoticeRepository,
  UpdateNoticeRepository,
  EventNoticeRepository,
  CashshopNoticeRepository,
];
