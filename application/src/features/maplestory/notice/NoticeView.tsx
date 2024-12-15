import { ReactElement } from 'react';
import { UpdateNotice } from './UpdateNotice';

export const NoticeView = (): ReactElement => {
  return (
    <div className={'flex gap-5 mt-5'}>
      <hr />
      <UpdateNotice />
    </div>
  );
};
