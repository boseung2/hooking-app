"use client";
import { useUser } from "@/hooks/useUser";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import AuthBottomNavigation from "./AuthBottomNavigation";
import { Link } from "@chakra-ui/next-js";

function DetailLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useUser();
  return (
    <Container
      maxW="md"
      h="100%"
      borderX={["", "", "1px"]}
      borderColor={["", "", "gray.200"]}
      p="0"
    >
      <Flex align="center">
        <Link href="/">
          <IconButton
            variant="none"
            aria-label="Done"
            fontSize="20px"
            w={14}
            h={14}
            icon={<ArrowBackIcon />}
          />
        </Link>
        <Heading as="h2" size="md">
          게시하기
        </Heading>
      </Flex>
      <main>{children}</main>
      {!isLoggedIn && <AuthBottomNavigation />}
    </Container>
  );
}

export default DetailLayout;
