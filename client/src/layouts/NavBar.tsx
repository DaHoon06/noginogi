"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  Text,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { NogiLogo } from "@components/logo/Logo";
import { ReactElement } from "react";

export const NavBar = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  // 화면 크기에 따라 버튼을 변경
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">
        <NogiLogo />
      </Heading>
      <Spacer />
      <HStack spacing="20px">
        {/* 버튼 변경 */}
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              display={{ base: "flex", md: "none" }} // Mobile에서 표시, Desktop에서 숨김
              onClick={onOpen}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>메뉴</DrawerHeader>
                <DrawerBody>
                  <Box bg="gray.200" p="10px" mb="10px">
                    M
                  </Box>
                  <Text mb="10px">mario@netninja.dev</Text>
                  <Button colorScheme="purple" onClick={onClose}>
                    Logout
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <Box bg="gray.200" p="10px">
              M
            </Box>
            <Button colorScheme="purple">Logout</Button>
          </>
        )}
      </HStack>
    </Flex>
  );
};
