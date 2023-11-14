"use client";

import { Box, Container } from "@chakra-ui/react";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import TopHeader from "./TopHeader";
import AuthBottomNavigation from "./AuthBottomNavigation";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container
        maxW="md"
        h="100%"
        borderX={["", "", "1px"]}
        borderColor={["", "", "gray.200"]}
        p="0"
      >
        <TopHeader />
        <Box pb={14}>{children}</Box>
        {/* <BottomNavigation /> */}
        <AuthBottomNavigation />
      </Container>
    </>
  );
}

export default RootLayout;
