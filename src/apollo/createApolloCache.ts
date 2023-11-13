import { PaginatedBoards } from "@/generated/graphql";
import { InMemoryCache } from "@apollo/client";

export const createApolloCache = (): InMemoryCache => {
  return new InMemoryCache({
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
  });
};
