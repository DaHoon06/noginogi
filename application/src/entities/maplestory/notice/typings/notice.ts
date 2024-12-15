type NoticeListType = {
  title: string;
  url: string;
  notice_id: string;
  date: Date;
};

type UpdateNoticeListType = NoticeListType & { type: string };

type EventNoticeListType = NoticeListType & {
  date_event_start: Date;
  date_event_end: Date;
};

type CashshopNoticeListType = NoticeListType & {
  sale_start_date: Date | null;
  sale_end_date: Date | null;
  ongoing_flag: boolean | null;
};

type ResponseNoticeListType = NoticeListType;
type ResponseCashshopNoticeListType = CashshopNoticeListType;
type ResponseEventNoticeListType = EventNoticeListType;
type ResponseUpdateNoticeListType = UpdateNoticeListType;

export type {
  NoticeListType,
  UpdateNoticeListType,
  CashshopNoticeListType,
  EventNoticeListType,
  ResponseNoticeListType,
  ResponseCashshopNoticeListType,
  ResponseEventNoticeListType,
  ResponseUpdateNoticeListType,
};
