import { Board } from "@/generated/graphql";
import { Box, Flex, Icon, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaRegHeart, FaHeart, FaRegComment, FaEye } from "react-icons/fa";

dayjs.extend(relativeTime);

type BoardCardProps = {
  board: Board;
};

function BoardCard({ board }: BoardCardProps) {
  return (
    <Box p="6" pb="1">
      <Flex>
        <Box minW="10">
          <SkeletonCircle size="10" />
        </Box>
        <Box pl="6">
          <Flex gap="3">
            <Text fontWeight="bold">{board.writer.username}</Text>
            <Text color="gray.500">{dayjs(board.createDate).fromNow()}</Text>
          </Flex>
          <Text style={{ whiteSpace: "pre-line" }}>{board.content}</Text>
          <Flex gap="2" pt="3" align="center">
            <Icon as={FaRegComment} color="gray.500" />
            <Text color="gray.500" fontSize="sm">
              {board.views}
            </Text>
            <Icon as={FaRegHeart} color="gray.500" />
            <Text color="gray.500" fontSize="sm">
              {board.likes}
            </Text>
            <Icon as={FaEye} color="gray.500" fontSize="sm" />
            <Text color="gray.500">{board.views}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default BoardCard;
