import { Flex, Image } from "@chakra-ui/react";
import React from "react";

function TopHeader() {
  return (
    <Flex
      h="11"
      p="7"
      justify="center"
      align="center"
      fontWeight="bold"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Image src="/assets/logo_black.png" alt="Hooking" width={20} height={6} />
    </Flex>
  );
}

export default TopHeader;
