"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/apollo/createApolloClient";
import React from "react";

const apolloClient = createApolloClient();

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
