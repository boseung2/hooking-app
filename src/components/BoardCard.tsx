import { Board } from "@/generated/graphql";
import { Box, Flex, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BoardCardProps = {
  board: Board;
};

function BoardCard({ board }: BoardCardProps) {
  return (
    <Box p="6">
      <Flex>
        <Box minW="10">
          <SkeletonCircle size="10" />
        </Box>
        <Box pl="6">
          <Flex gap="2">
            <Text fontWeight="bold">{board.writer.username}</Text>
            <Text color="gray.500">{dayjs(board.createDate).fromNow()}</Text>
          </Flex>
          <Text style={{ whiteSpace: "pre-line" }}>{board.content}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default BoardCard;
