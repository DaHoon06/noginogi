import styled from "styled-components";
import { Fragment, ReactElement, useCallback } from "react";
import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as S from './styles/Pagination.styled';


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
    <S.PaginationLayout>
      <S.PaginationBox>
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
      </S.PaginationBox>
    </S.PaginationLayout>
  );
};
