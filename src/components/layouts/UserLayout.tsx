"use client";
import { useUser } from "@/hooks/useUser";
import { Container, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import AuthBottomNavigation from "./AuthBottomNavigation";
import BottomNavigation from "./BottomNavigation";
import { useUserQuery } from "@/generated/graphql";
import { usePathname } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

function UserLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useUser();
  const pathname = usePathname();
  const { data, loading, error } = useUserQuery({
    variables: { userId: pathname.substring(1) },
  });

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
        <Heading as="h1" size="md">
          {data?.user?.username}
        </Heading>
      </Flex>
      <main>{children}</main>
      {isLoggedIn ? <BottomNavigation /> : <AuthBottomNavigation />}
    </Container>
  );
}

export default UserLayout;
