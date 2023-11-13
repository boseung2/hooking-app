"use client";

import { useBoardsQuery } from "@/generated/graphql";
import {
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  StackDivider,
  VStack,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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
  dayjs.extend(relativeTime);

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
              <Flex gap="2">
                <Text fontWeight="bold">{board.writer.username}</Text>
                <Text color="gray.500">
                  {dayjs(board.createDate).fromNow()}
                </Text>
              </Flex>
              {board.content}
            </Box>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}

export default BoardList;
