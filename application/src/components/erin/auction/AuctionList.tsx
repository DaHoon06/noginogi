"use client";

import { ReactElement, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuctionListQuery } from "@state/queries/hooks";
import { AuctionItem } from "@type/interfaces/auction";
import { ItemDetailModal } from "./modal/ItemDetailModal";

export const AuctionList = (): ReactElement | null => {
  const { data, isLoading } = useAuctionListQuery({
    auction_item_category: "검",
  });
  const [selectedItem, setSelectedItem] = useState<AuctionItem | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) return null;

  const handleRowClick = (item: AuctionItem) => {
    setSelectedItem(item); // 클릭한 아이템 저장
    onOpen(); // 모달 열기
  };

  return (
    <>
      <TableContainer maxWidth={800} border={"1px solid #ebebeb"}>
        <Table variant={"simple"}>
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
            {data &&
              data.auction_item.map((item, index) => (
                <Tr
                  key={`${item.item_name}_${index}`}
                  onClick={() => handleRowClick(item)}
                >
                  <Td>No Image</Td>
                  <Td>{item.item_display_name}</Td>
                  <Td>{item.item_count}</Td>
                  <Td>{item.auction_price_per_unit.toLocaleString()}원</Td>
                  <Td>
                    {new Date(item.date_auction_expire).toLocaleDateString()}
                  </Td>
                </Tr>
              ))}
            {data && data.auction_item.length === 0 && (
              <Tr>
                <Td colSpan={6} textAlign="center" verticalAlign="middle">
                  No Data.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <ItemDetailModal item={selectedItem} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
