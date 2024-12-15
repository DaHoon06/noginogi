'use client';

import { Swiper, SwiperClass, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './ImageSwiper.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface CarouselItems {
  originName: string;
  path1: string;
}

interface Props {
  items: CarouselItems[];
  options?: SwiperProps;
}

export const ImageSwiper = (props: Props) => {
  const { items, options } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCarousel = (swiper: SwiperClass) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        {...options}
        onSlideChange={(swiper) => onChangeCarousel(swiper)}
        slidesPerView={1}
        loop={items.length > 1}
        className={styles.carouselBody}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={crypto.randomUUID()}>
              {item.path1.length > 0 ? (
                <div className={styles.carouselBanner}>
                  <Image
                    className={styles.carouselBannerImage}
                    src={item.path1}
                    alt={item.originName}
                    priority={true}
                    width={300}
                    height={200}
                  />
                </div>
              ) : (
                <p>{item.originName}</p>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.carouselCountWrapper}>
        <span className={styles.carouselCount}>
          {currentPage}/{items.length}
        </span>
      </div>
    </div>
  );
};
