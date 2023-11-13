import { Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

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
      <Image
        src="/assets/logo_black.png"
        alt="Hooking"
        width={160}
        height={40}
      />
    </Flex>
  );
}

export default TopHeader;
