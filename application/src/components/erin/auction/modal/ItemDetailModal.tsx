"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { AuctionItem } from "@type/interfaces/auction";

interface ItemDetailModalProps {
  item: AuctionItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ItemDetailModal = ({
  item,
  isOpen,
  onClose,
}: ItemDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>아이템 상세 조회</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>이미지</div>
          <p>{item?.item_display_name}</p>

          {item &&
            item.item_option.map((opt, optIndex) => (
              <div key={`${item.item_name}_option_${optIndex}`}>
                <p>{opt.option_type}</p>
                <p>{opt.option_sub_type}</p>
                <p>{opt.option_value}</p>
                <p>{opt.option_value2}</p>
                <p>{opt.option_desc}:</p>
              </div>
            ))}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
