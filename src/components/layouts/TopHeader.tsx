import { useLogoutMutation } from "@/generated/graphql";
import { useUser } from "@/hooks/useUser";
import { useApolloClient } from "@apollo/client";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaRegSun } from "react-icons/fa";

function TopHeader() {
  const { isLoggedIn, logout, loading } = useUser();

  return (
    <Flex
      h="11"
      p="7"
      justify="space-between"
      align="center"
      fontWeight="bold"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Box />
      <Image src="/assets/logo_black.png" alt="Hooking" width={20} height={6} />
      {isLoggedIn ? (
        <Menu boundary="scrollParent">
          <MenuButton
            as={IconButton}
            aria-label="Settings"
            icon={<Icon as={FaRegSun} w="5" h="5" m="2" />}
            variant="none"
          />
          <MenuList>
            <MenuItem isDisabled={loading} onClick={logout}>
              로그아웃
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Box />
      )}
    </Flex>
  );
}

export default TopHeader;
