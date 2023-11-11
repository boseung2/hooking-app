"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/apollo/apolloClient";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default Providers;
