"use client";

import { Button, Flex, Input } from "@chakra-ui/react";
import { ReactElement } from "react";

export const SearchBar = (): ReactElement => {
  return (
    <form>
      <Flex gap={8}>
        <Input type={"text"} placeholder="아이템 명을 입력해주세요." />
        <Button>검색</Button>
      </Flex>
    </form>
  );
};
