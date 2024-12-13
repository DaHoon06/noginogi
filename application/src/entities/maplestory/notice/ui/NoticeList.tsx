'use client';

import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Card } from '@chakra-ui/react';
import { TfiAnnouncement } from 'react-icons/tfi';
import { useNoticeQuery } from '../services/queries';

const NoticeList = (): ReactElement => {
  const { data, isLoading } = useNoticeQuery();

  if (isLoading) return <div>롸</div>;

  return (
    <Card borderRadius={4}>
      <p className={'px-10'}>
        <TfiAnnouncement size={20} /> 공지사항
      </p>
      <div className={'w-full px-10'}>
        {data && data.map((notice) => {
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
