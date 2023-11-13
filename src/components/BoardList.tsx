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
import React from "react";

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
  const { data, loading, error } = useBoardsQuery();

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
      {data?.boards.map((board) => (
        <Box key={board.id} w="100%" p="6">
          <Flex>
            <Box minW="10">
              <SkeletonCircle size="10" />
            </Box>
            <Box pl="6">
              {board.writer.username}
              <br />
              {board.content}
            </Box>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}

export default BoardList;
