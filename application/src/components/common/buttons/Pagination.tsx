import styled from "styled-components";
import { Fragment, ReactElement, useCallback } from "react";
import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PaginationLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  li {
    border-radius: 2px;
    border: 1px solid #dee2e6;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.prev,
    &.next {
      &:hover {
        background-color: #e2e6ea;
      }

      &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    .page {
      background-color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #252525;

      &.active {
        background-color: #00bde1;
        color: white;
        border-color: #696969;
      }

      &:hover {
        background-color: #e2e6ea;
      }
    }
  }
`;

interface PaginationProps {
  currentPage: number; // 현재 페이지
  totalItemCount: number; // 데이터 총 개수
  limit: number; // 화면에 보여질 개수
  prev?: boolean; // 이전 버튼 show hide 여부
  next?: boolean; // 다음 버튼 show hide 여부
  pageKey: string;
  pageCount: number; // 한 화면에 보여질 페이지 개수
  onClickPage: (page: number) => void;
}

export const Pagination = ({
  pageKey,
  totalItemCount,
  limit,
  currentPage,
  pageCount,
  onClickPage,
}: PaginationProps): ReactElement => {
  const totalPage = Math.ceil(totalItemCount / limit);
  const currentGroup = Math.ceil(currentPage / pageCount);
  const startPage = (currentGroup - 1) * pageCount + 1;
  const endPage = Math.min(currentGroup * pageCount, totalPage);

  const isPrevDisabled = startPage === 1;
  const isNextDisabled = endPage === totalPage;

  // 페이지 클릭
  const handleClickPagination = useCallback(
    (page: number): void => {
      onClickPage(page);
    },
    [onClickPage],
  );

  const handleClickPrevGroup = useCallback((): void => {
    if (startPage === 1) return;
    onClickPage(startPage - 1);
  }, [startPage, onClickPage]);

  const handleClickNextGroup = useCallback((): void => {
    if (endPage === totalPage) return;
    onClickPage(endPage + 1);
  }, [endPage, onClickPage, totalPage]);

  return (
    <PaginationLayout>
      <PaginationBox>
        <li
          className={classNames("prev", { disabled: isPrevDisabled })}
          onClick={handleClickPrevGroup}
        >
          <IoIosArrowBack
            size={18}
            color={isPrevDisabled ? "#b9b9b9" : "#222"}
          />
        </li>
        {[...Array(endPage - startPage + 1)].map((_, i) => (
          <Fragment key={`pagination_${startPage + i}_${pageKey}`}>
            <li onClick={() => handleClickPagination(startPage + i)}>
              <span
                className={classNames(
                  "page",
                  `${currentPage === startPage + i && "active"}`,
                )}
              >
                {startPage + i}
              </span>
            </li>
          </Fragment>
        ))}
        <li
          className={classNames("next", { disabled: isNextDisabled })}
          onClick={handleClickNextGroup}
        >
          <IoIosArrowForward
            size={18}
            color={isNextDisabled ? "#b9b9b9" : "#222"}
          />
        </li>
      </PaginationBox>
    </PaginationLayout>
  );
};
