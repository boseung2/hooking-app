"use client";

import { Box, Container } from "@chakra-ui/react";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import TopHeader from "./TopHeader";
import AuthBottomNavigation from "./AuthBottomNavigation";
import { useUser } from "@/hooks/useUser";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useUser();

  return (
    <>
      <Container
        maxW="md"
        h="100%"
        borderX={["", "", "1px"]}
        borderColor={["", "", "gray.100"]}
        p="0"
      >
        <TopHeader />
        <Box pb={14}>
          <main>{children}</main>
        </Box>
        {isLoggedIn ? <BottomNavigation /> : <AuthBottomNavigation />}
      </Container>
    </>
  );
}

export default RootLayout;
