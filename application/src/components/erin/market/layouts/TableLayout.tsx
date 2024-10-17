import {Table, Tbody, Thead} from "@components/common/Table";
import {Pagination} from "@components/common/buttons";

export const TableLayout = () => {
  return (
    <>
      <Table>
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
    </>
  )
}