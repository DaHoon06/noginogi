'use client';

import React from 'react';
import { useUpdateNotcieQuery } from '../services/queries';
import { ListSwiper } from '@shared/ui/swiper';

const UpdateNoticeList = () => {
  const { data, isLoading } = useUpdateNotcieQuery();

  if (isLoading)
    return <div className="text-center py-4 text-lg">로딩 중...</div>;

  return (
    <div>
      <div>{data && <ListSwiper data={data} />}</div>
    </div>
  );
};

export default React.memo(UpdateNoticeList);
