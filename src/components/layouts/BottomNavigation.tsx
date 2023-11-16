import { Center, Flex, Icon, Link } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { FaHome, FaUser } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsPerson,
  BsFillHouseDoorFill,
  BsHouseDoor,
} from "react-icons/bs";
import { useUser } from "@/hooks/useUser";
import { usePathname } from "next/navigation";

function BottomNavigation() {
  const pathname = usePathname();
  const { user } = useUser();

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
          {pathname === "/" ? (
            <Icon as={BsFillHouseDoorFill} w="7" h="7" m="2" />
          ) : (
            <Icon as={BsHouseDoor} w="7" h="7" m="2" />
          )}
        </Center>
      </Link>
      <Link as={NextLink} href={`/${user?.userId}`}>
        <Center>
          {pathname === `/${user?.userId}` ? (
            <Icon as={BsFillPersonFill} w="7" h="7" m="2" />
          ) : (
            <Icon as={BsPerson} w="7" h="7" m="2" />
          )}
        </Center>
      </Link>
    </Flex>
  );
}

export default BottomNavigation;
