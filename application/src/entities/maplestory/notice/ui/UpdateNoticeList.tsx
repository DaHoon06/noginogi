'use client';

import React from 'react';
import { useUpdateNotcieQuery } from '../services/queries';
import { ListSwiper } from '@entities/maplestory/swiper';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

const UpdateNoticeContainer = styled.article`
  max-width: 700px;
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 0.8em 1em;
`;

const UpdateNoticeList = () => {
  const { data, isLoading } = useUpdateNotcieQuery();

  if (isLoading)
    return <div className="text-center py-4 text-lg">로딩 중...</div>;

  return (
    <UpdateNoticeContainer>
      <Flex justifyContent={'space-between'}>
        <h2>업데이트</h2>
        <Link href={'#'}>더 보기</Link>
      </Flex>

      {data && <ListSwiper data={data} />}
    </UpdateNoticeContainer>
  );
};

export default React.memo(UpdateNoticeList);
