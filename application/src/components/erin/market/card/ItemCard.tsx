import styled from "styled-components";
import {ReactElement} from "react";
import {Typography} from "@components/common/Typography";

export const ItemCardLayout = styled.article`
  height: 300px;
  width: auto;
  border: none;
  overflow: hidden;
  padding-bottom: 0.4em;
  position: relative;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .thumbnail_wrapper {
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 288px;
      border-radius: 4px 4px 0 0;
    }
  }

  section {
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    gap: 4px;

    .title {
      font-weight: 700;
      font-size: 16px;
      color: #222;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 2;
      -webkit-line-clamp: 2;
    }

    
    .price {
      font-weight: 700;
      color: #ff533b;
    }
    
    .rest-time {
      font-size: 14px;
      color: #696969;
    }
  }
`

const NoImageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;

  &::after {
    width: 100%;
    height: 100%;
    content: "No Image";
    color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const NoImage = (): ReactElement => {
  return <NoImageLayout />;
};

export const ItemCard = ({thumbnails}: {thumbnails?: any}): ReactElement  => {
  return (
    <ItemCardLayout>
      <div className={"thumbnail_wrapper"}>
        {thumbnails && thumbnails.length > 0 && (
          <Image
            src={thumbnails[0].path}
            alt={thumbnails[0].name}
            width={288}
            height={288}
          />
        )}
        {!thumbnails  && <NoImage />}
      </div>
      <section>
          <Typography className={"title"}>
            빨간 포션
          </Typography>
          <Typography className={"price"}>
            1,000 원
          </Typography>
        <Typography className={'rest-time'}>
          1시간 전
        </Typography>
      </section>
    </ItemCardLayout>
  )
}