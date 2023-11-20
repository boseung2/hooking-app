import { Center, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import {
  BsFillPersonFill,
  BsPerson,
  BsFillHouseDoorFill,
  BsHouseDoor,
} from "react-icons/bs";
import { useUser } from "@/hooks/useUser";
import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

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
      <Link href="/">
        <Center>
          {pathname === "/" ? (
            <Icon as={BsFillHouseDoorFill} w="7" h="7" m="2" />
          ) : (
            <Icon as={BsHouseDoor} w="7" h="7" m="2" />
          )}
        </Center>
      </Link>
      <Link href={`/${user?.userId}`}>
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
