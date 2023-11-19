"use client";

import { useBoardsQuery } from "@/generated/graphql";
import {
  Box,
  Flex,
  IconButton,
  SkeletonCircle,
  SkeletonText,
  StackDivider,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import BoardCard from "./BoardCard";
import { Waypoint } from "react-waypoint";
import { AddIcon } from "@chakra-ui/icons";
import CreateBoardModal from "./CreateBoardModal";
import { useUser } from "@/hooks/useUser";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn } = useUser();

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
    <>
      <CreateBoardModal isOpen={isOpen} onClose={onClose} />
      <Box>
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
        {isLoggedIn && (
          <Box position="sticky" bottom={20} pr={6} float="right">
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="blue"
              aria-label="Done"
              fontSize="28px"
              w={14}
              h={14}
              icon={<AddIcon />}
              onClick={onOpen}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default BoardList;
