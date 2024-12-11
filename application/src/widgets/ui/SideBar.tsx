'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SideBarProps {
  item: any; // 미정
  isMobile: boolean;
}

export const SideBar = ({ isMobile }: SideBarProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      style={
        isMobile
          ? {
              backgroundColor: '#ffffffc2',
              position: 'sticky',
              top: 0,
            }
          : {}
      }
    >
      {isMobile ? (
        <IconButton
          aria-label="Open Sidebar"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          m="10px"
        />
      ) : (
        <>
          <Box
            display={{ base: 'none', md: 'block' }}
            position="fixed"
            left="0"
            width="200px"
            height="100vh"
            bg="gray.100"
            p="10px"
          >
            <Heading>Main Content</Heading>
            <Text>여기에 페이지 내용을 작성하세요.</Text>
          </Box>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>사이드바 메뉴</DrawerHeader>
              <DrawerBody>
                <Box mb="20px">
                  <Text fontWeight="bold">메뉴 1</Text>
                </Box>
                <Box mb="20px">
                  <Text fontWeight="bold">메뉴 2</Text>
                </Box>
                <Box mb="20px">
                  <Text fontWeight="bold">메뉴 3</Text>
                </Box>
                <Button colorScheme="blue" onClick={onClose}>
                  닫기
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};
