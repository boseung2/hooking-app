"use client";
import { useBoardQuery } from "@/generated/graphql";
import {
  Icon,
  Text,
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import dayjs from "dayjs";

function Page({ params }: { params: { id: number } }) {
  const { data, loading, error } = useBoardQuery({
    variables: { boardId: Number(params.id) },
  });

  if (loading)
    return (
      <Box p="6">
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

  if (error) return <Box>존재하지 않는 게시물입니다.</Box>;

  return (
    <Box p="6">
      <Flex align="center">
        <Box minW="10">
          <SkeletonCircle size="10" />
        </Box>
        <Box pl="6">
          <Text fontWeight="bold">{data?.board?.writer.username}</Text>
          <Text color="gray.500">{`@${data?.board?.writer.userId}`}</Text>
        </Box>
      </Flex>
      <Box pt="4" style={{ whiteSpace: "pre-wrap" }}>
        {data?.board?.content}
      </Box>
      <Flex py="5" gap="1">
        <Text color="gray.500">
          {dayjs(data?.board?.createDate).format("a") === "am"
            ? "오전"
            : "오후"}
          {dayjs(data?.board?.createDate).format(` hh:mm · YYYY년 MM월 D일 · `)}
        </Text>
        <Text fontWeight="bold">{` ${data?.board?.views} `}</Text>
        <Text color="gray.500">{` 조회수 `}</Text>
      </Flex>
      <Flex gap="2" p="2" align="center" borderY="1px" borderColor="gray.100">
        <Icon as={FaRegComment} color="gray.500" />
        <Text color="gray.500">{data?.board?.reviews}</Text>
        <Icon as={FaRegHeart} color="gray.500" />
        <Text color="gray.500">{data?.board?.likes}</Text>
      </Flex>
    </Box>
  );
}

export default Page;
