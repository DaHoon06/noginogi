'use client';

import React from 'react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styled from '@emotion/styled';

const Slide = styled.div`
  background-color: #ffffff;
  display: flex;
  gap: 0.5rem;
  transition: box-shadow 0.3s;
  align-items: center;
`;

const Label = styled.div<{ type: string }>`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ type }) =>
    type === '캐시샵' ? '#10b981' : type === '공지' ? '#5d7acb' : '#6b7280'};
  color: #fff;
  padding: 0 1em;
  border-radius: 20px;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4rem;

  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const DateText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const SlideText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const SwiperWrapper = styled.div`
  position: relative;

  .swiper-pagination {
    position: relative;
    margin-top: 1rem;
  }

  .swiper-pagination-bullet-active {
    color: #94aef4;
    background-color: #94aef4;
    width: 26px;
    border-radius: 10px;
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

interface ListSwiperProps {
  data: any[];
}

export const ListSwiper = (props: ListSwiperProps) => {
  const { data } = props;
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data &&
          Array.from({ length: Math.ceil(data.length / 5) }, (_, index) => (
            <SwiperSlide key={`page_${index}`}>
              <SlideContent>
                {data.slice(index * 5, index * 5 + 5).map((notice) => (
                  <Slide key={`${notice.url}_${notice.notice_id}`}>
                    <Label type={notice.type}>{notice.type}</Label>
                    <Title>{notice.title}</Title>
                    <DateText>
                      {new Date(notice.date).toLocaleDateString()}
                    </DateText>
                  </Slide>
                ))}
              </SlideContent>
            </SwiperSlide>
          ))}
      </Swiper>
    </SwiperWrapper>
  );
};
