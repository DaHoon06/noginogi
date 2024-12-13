'use client';

import React, { ReactElement } from 'react';
import { useCashshopNoticeQuery } from '../services/queries';
import Link from 'next/link';

const CashshopNotice = (): ReactElement => {
  const {data, isLoading} = useCashshopNoticeQuery();

  if (isLoading) return <div>롸</div>;

  return (
    <div>
      <div>캐시샵</div>
      {data && data.map((notice) => {
          return (
            <div key={notice.url} className={'flex gap-5'}>
              <Link href={notice.url}>{notice.title}</Link>
              <div>{notice.date.toString()}</div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(CashshopNotice);
