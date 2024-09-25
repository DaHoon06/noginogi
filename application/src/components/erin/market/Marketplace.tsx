import { ReactElement } from "react";
import styled from "styled-components";
import {Table, Tbody, Thead} from "@components/common/Table";
import {Pagination} from "@components/common/buttons";

export const MarketplaceLayout = styled.article``;

export const Marketplace = (): ReactElement => {
  return (
    <MarketplaceLayout>
      <h1>
        마비노기 경매장
      </h1>

      <div>
        카드로 보기
        리스트로 보기
      </div>
      <Table>
        <Thead>
          <tr>
            <th></th>
            <th colSpan={4}>
              <div>
                <span>카테고리</span>
                <input type="text" />
                <button>검색</button>
              </div>

            </th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <td>상품 이미지1</td>
            <td>상품명</td>
            <td>가격</td>
            <td>남은 시간 표기</td>
          </tr>
          <tr>
            <td>상품 이미지2</td>
            <td>상품명</td>
            <td>가격</td>
            <td>남은 시간 표기</td>
          </tr>
        </Tbody>
      </Table>
      <Pagination
        currentPage={2}
        totalItemCount={2}
        limit={10}
        pageKey={'market'}
        pageCount={10}
        onClickPage={() => {}}
      />
    </MarketplaceLayout>
  );
};
