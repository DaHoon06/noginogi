import { ReactElement } from 'react';
import styles from './UpdateNotice.module.scss';
import { UpdateNoticeList } from '@entities/maplestory/notice';

export const UpdateNotice = (): ReactElement => {
  return (
    <div className={styles.updateNoticeContainer}>
      <UpdateNoticeList />
    </div>
  );
};
