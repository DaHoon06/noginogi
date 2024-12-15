import { NoticeList, CashshopNoticeList } from '@entities/maplestory';
import { UpdateNotice } from './UpdateNotice';

export const NoticeView = () => {
  return (
    <div className={'flex gap-5 mt-5'}>
      <NoticeList />
      <CashshopNoticeList />
      <hr />
      <UpdateNotice />
    </div>
  );
};
