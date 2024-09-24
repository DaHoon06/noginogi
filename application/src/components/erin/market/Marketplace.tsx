import { ReactElement } from "react";
import styled from "styled-components";

export const MarkplaceLayout = styled.article``;

export const Marketplace = (): ReactElement => {
  return (
    <MarkplaceLayout>
      마비노기 경매장
      <div>
        <p>카테고리</p>
        <input type="text" />
        <button>검색</button>
      </div>
      <div>
        카드로 보기
        리스트로 보기
      </div>
    </MarkplaceLayout>
  );
};
