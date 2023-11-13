"use client";

import { useBoardsQuery } from "@/generated/graphql";
import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import BoardCard from "./BoardCard";
import { Waypoint } from "react-waypoint";

const Skeleton = () => (
  <Box w="100%" p="6">
    <Flex>
      <Box minW="10">
        <SkeletonCircle size="10" />
      </Box>
      <Box w="100%" pl="6">
        <SkeletonText noOfLines={4} spacing={8} skeletonHeight={4} />
      </Box>
    </Flex>
  </Box>
);

function BoardList() {
  const LIMIT = 6;
  const { data, loading, error, fetchMore } = useBoardsQuery({
    variables: {
      limit: LIMIT,
      cursor: 1,
    },
  });

  if (loading)
    return (
      <VStack>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </VStack>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />}>
      {data?.boards.boards.map((board, i) => (
        <Box key={board.id} w="100%">
          {data.boards.cursor &&
            i === data.boards.boards.length - LIMIT / 2 && (
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: {
                      limit: LIMIT,
                      cursor: data.boards.cursor,
                    },
                  });
                }}
              />
            )}
          <BoardCard board={board} />
        </Box>
      ))}
    </VStack>
  );
}

export default BoardList;
