'use client';

import { Button, Flex, Input } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, ReactElement } from 'react';
import styled from '@emotion/styled';
import { queryClient } from '@shared/lib/tanstack';
import { queryKeys } from '@shared/state/queries/key';

const Form = styled.form`
  width: 100%;
`;

interface SearchBarProps {
  itemName: string;
  onChangeItemName: (name: string) => void;
}

export const SearchBar = (props: SearchBarProps): ReactElement => {
  const { itemName, onChangeItemName } = props;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeItemName(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    queryClient.invalidateQueries({
      queryKey: [queryKeys.auction],
      exact: false,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Flex gap={2}>
        <Input
          borderRadius={2}
          type={'text'}
          placeholder="아이템 명을 입력해주세요."
          value={itemName}
          onChange={handleChangeInput}
        />
        <Button>검색</Button>
      </Flex>
    </Form>
  );
};
