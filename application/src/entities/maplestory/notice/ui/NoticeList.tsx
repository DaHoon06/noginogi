'use client';

import React, { ReactElement, useEffect, useState } from 'react';
import { noticeListApi } from '@entities/maplestory';
import { NoticeList } from '@entities/maplestory/notice/typings';
import Link from 'next/link';
import { Card } from '@chakra-ui/react';
import classNames from 'classnames';
import { TfiAnnouncement } from 'react-icons/tfi';
const NoticeList = (): ReactElement => {
  const [noticeList, setNoticeList] = useState<NoticeList[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await noticeListApi();
    setNoticeList(result);
  };
  return (
    <Card borderRadius={4}>
      <p className={'px-10'}>
        <TfiAnnouncement size={20} /> 공지사항
      </p>
      <div className={classNames('w-full px-10')}>
        {noticeList.map((notice) => {
          return (
            <div key={notice.url} className={'flex gap-5'}>
              <Link href={notice.url}>{notice.title}</Link>
              <div>{notice.date.toString()}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default React.memo(NoticeList);
