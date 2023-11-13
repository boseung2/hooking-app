"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import TopHeader from "./TopHeader";

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
        <BottomNavigation />
      </Container>
    </>
  );
}

export default RootLayout;
