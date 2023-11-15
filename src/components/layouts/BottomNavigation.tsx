import { Center, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { FaHome, FaUser } from "react-icons/fa";

function BottomNavigation() {
  return (
    <Flex
      bgColor="white"
      w={["100%", "446px"]}
      h="14"
      position="fixed"
      bottom="0"
      justify="space-around"
      align="center"
      flexGrow="1"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Link as={NextLink} href="/">
        <Center>
          <Icon as={FaHome} w="7" h="7" m="2" />
        </Center>
      </Link>
      <Link as={NextLink} href="/user">
        <Center>
          <Icon as={FaUser} w="7" h="7" m="2" />
        </Center>
      </Link>
    </Flex>
  );
}

export default BottomNavigation;
