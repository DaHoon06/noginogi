import { NoticeList, CashshopNoticeList } from '@entities/maplestory';

export const NoticeView = () => {
  return (
    <div className={'flex gap-5 mt-5'}>
      <NoticeList />
      <CashshopNoticeList />
    </div>
  );
};
