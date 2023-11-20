"use client";
import { useUserQuery } from "@/generated/graphql";
import { Box, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";

function Page({ params }: { params: { userId: string } }) {
  console.log(params.userId);
  const { data, loading, error } = useUserQuery({
    variables: { userId: params.userId },
  });

  if (loading) {
    return (
      <Box p="6">
        <SkeletonCircle size="20" />
      </Box>
    );
  }

  if (error) {
    return <Box>존재하지 않는 유저입니다.</Box>;
  }

  return (
    <Box p="6">
      <Box pb="4">
        <SkeletonCircle size="20" />
      </Box>
      <Text fontWeight="bold" fontSize="lg">
        {data?.user?.username}
      </Text>
      <Text>{`@${data?.user?.userId}`}</Text>
      <Text>{`가입일: ${dayjs(data?.user?.createdAt).format(
        "YYYY년 MM월 DD일"
      )}`}</Text>
    </Box>
  );
}

export default Page;
