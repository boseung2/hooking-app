import { Container, Divider, Flex } from "@chakra-ui/react";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW="md" h="100%" borderX="1px" borderColor="gray.200" p="0">
      <Flex h="44px" p="6" justify="center" align="center">
        Hooking
      </Flex>
      <Divider />
      {children}
    </Container>
  );
}

export default RootLayout;
