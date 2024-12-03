'use client';

import {ReactElement} from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, } from "@chakra-ui/react";
import {useAuctionListQuery} from "@state/queries/hooks";

export const AuctionList = (): ReactElement | null => {

  const {data, isLoading} = useAuctionListQuery({auction_item_category: '검'})

  if (isLoading) return null;

  return (
    <TableContainer>
      <Table variant={'simple'}>
        <Thead>
          <Tr>
            <Th>이미지</Th>
            <Th>이름</Th>
            <Th>수량</Th>
            <Th>가격</Th>
            <Th>만료일</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data && data.auction_item.map((item, index) => (
            <Tr key={`${item.item_name}_${index}`}>
              <Td>No Image</Td>
              <Td>{item.item_display_name}</Td>
              <Td>{item.item_count}</Td>
              <Td>{item.auction_price_per_unit.toLocaleString()}원</Td>
              <Td>{new Date(item.date_auction_expire).toLocaleDateString()}</Td>
              <Td>
                {item.item_option.map((opt, optIndex) => (
                  <div key={`${item.item_name}_option_${optIndex}`}>
                    {opt.option_desc}: {opt.option_value}
                  </div>
                ))}
              </Td>
            </Tr>
          ))}
          {data && data.auction_item.length === 0 && (<Tr><Td colSpan={6} textAlign="center" verticalAlign="middle">No Data.</Td></Tr>)}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

