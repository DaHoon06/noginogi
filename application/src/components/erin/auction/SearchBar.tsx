"use client";

import { Button, Flex, Input } from "@chakra-ui/react";
import { ReactElement } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 100%;
`;

export const SearchBar = (): ReactElement => {
  return (
    <Form>
      <Flex gap={2}>
        <Input
          borderRadius={2}
          type={"text"}
          placeholder="아이템 명을 입력해주세요."
        />
        <Button>검색</Button>
      </Flex>
    </Form>
  );
};
