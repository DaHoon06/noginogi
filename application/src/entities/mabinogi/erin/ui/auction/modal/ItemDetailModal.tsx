'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { AuctionItem } from '@type/interfaces/auction';

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
                {opt.option_type === '아이템 보호' && (
                  <>
                    <p>
                      {opt.option_type} <span>{opt.option_value}</span>
                    </p>
                  </>
                )}
                {opt.option_type === '공격' && (
                  <>
                    <p>
                      {opt.option_type}:{' '}
                      <span>
                        {opt.option_value} ~ {opt.option_value2}
                      </span>
                    </p>
                  </>
                )}
                {opt.option_type === '부상률' && (
                  <>
                    <p>
                      {opt.option_type}:{' '}
                      <span>
                        {opt.option_value} ~ {opt.option_value2}
                      </span>
                    </p>
                  </>
                )}
                {opt.option_type === '크리티컬' && (
                  <>
                    <p>
                      {opt.option_type}: <span>{opt.option_value}</span>
                    </p>
                  </>
                )}
                {opt.option_type === '밸런스' && (
                  <>
                    <p>
                      {opt.option_type}: <span>{opt.option_value}</span>
                    </p>
                  </>
                )}
                {opt.option_type === '숙련' && (
                  <>
                    <p>
                      {opt.option_type}: <span>{opt.option_value}</span>
                    </p>
                  </>
                )}
                {opt.option_type === '내구력' && (
                  <>
                    <p>
                      {opt.option_type}: <span>{opt.option_value}</span>
                    </p>
                  </>
                )}

                {opt.option_type === '아이템 색상' && (
                  <>
                    <p>
                      {opt.option_sub_type}: <span>{opt.option_value}</span>
                    </p>
                  </>
                )}

                {opt.option_type === '일반 개조' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>
                      {opt.option_value} : {opt.option_value2}
                    </p>
                  </>
                )}

                {opt.option_type === '보석 개조' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>
                      {opt.option_value} : {opt.option_value2}
                    </p>
                  </>
                )}
                {opt.option_type === '장인 개조' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>{opt.option_value}</p>
                  </>
                )}
                {opt.option_type === '특별 개조' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>{opt.option_sub_type}</p>
                    <p>{opt.option_value}</p>
                  </>
                )}

                {opt.option_type === '인챈트' && (
                  <>
                    <p> {opt.option_type}</p>
                    <p>
                      {opt.option_sub_type} <span>{opt.option_value}</span>
                    </p>
                    <p>{opt.option_desc}</p>
                  </>
                )}

                {opt.option_type === '세공 랭크' && (
                  <>
                    <p>
                      {opt.option_type}: <span>{opt.option_value}</span>
                    </p>
                    <p>{opt.option_sub_type}</p>
                    <p>
                      <span>{opt.option_value2}</span>
                    </p>
                    <p>{opt.option_desc}</p>
                  </>
                )}

                {opt.option_type === '세공 옵션' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>{opt.option_sub_type}</p>
                    <p>
                      <span>{opt.option_value}</span>
                    </p>
                  </>
                )}

                {opt.option_type === '에르그' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>{opt.option_sub_type}</p>
                    <p>
                      <span>{opt.option_value}</span>
                    </p>
                    <p>
                      <span>{opt.option_value2}</span>
                    </p>
                  </>
                )}

                {opt.option_type === '피어싱 레벨' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>
                      <span>{opt.option_value}</span>
                    </p>
                    <p>
                      <span>{opt.option_value2}</span>
                    </p>
                  </>
                )}

                {opt.option_type === '남은 전용 해체 가능 횟수' && (
                  <>
                    <p>{opt.option_type}</p>
                    <p>
                      <span>{opt.option_value} 번</span>
                    </p>
                  </>
                )}

                {opt.option_type === '세트효과' && (
                  <>
                    <p>{opt.option_sub_type}</p>
                    <p>
                      {opt.option_type}:{' '}
                      <span>
                        {opt.option_value} : {opt.option_value2}
                      </span>
                    </p>
                    <p>{opt.option_desc}</p>
                  </>
                )}
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
