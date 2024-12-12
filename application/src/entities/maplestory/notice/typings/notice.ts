type NoticeListType = {
  title: string;
  url: string;
  notice_id: string;
  date: Date;
};

type UpdateNoticeListType = NoticeListType;

type EventNoticeListType = NoticeListType & {
  date_event_start: Date;
  date_event_end: Date;
};

type CashshopNoticeListType = NoticeListType & {
  date_sale_start: Date;
  date_sale_end: Date;
  ongoing_flag: string;
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
