"use client";
import { useUser } from "@/hooks/useUser";
import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AuthBottomNavigation from "./AuthBottomNavigation";
import BottomNavigation from "./BottomNavigation";

function UserLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useUser();
  return (
    <Container
      maxW="md"
      h="100%"
      borderX={["", "", "1px"]}
      borderColor={["", "", "gray.200"]}
      p="0"
    >
      <Flex align="center" p="4">
        <Heading as="h1" size="md">
          {/* {user?.username} */}
        </Heading>
      </Flex>
      <main>{children}</main>
      {isLoggedIn ? <BottomNavigation /> : <AuthBottomNavigation />}
    </Container>
  );
}

export default UserLayout;
