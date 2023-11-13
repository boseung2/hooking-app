import { PaginatedBoards } from "@/generated/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          boards: {
            keyArgs: false,
            merge: (
              existing: PaginatedBoards | undefined,
              incoming: PaginatedBoards
            ): PaginatedBoards => {
              return {
                cursor: incoming.cursor,
                boards: existing
                  ? [...existing.boards, ...incoming.boards]
                  : incoming.boards,
              };
            },
          },
        },
      },
    },
  }),
});
