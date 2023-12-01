"use client";
import {
  Board,
  BoardDocument,
  BoardQuery,
  BoardQueryVariables,
  useBoardQuery,
  useLikeBoardMutation,
} from "@/generated/graphql";
import {
  Icon,
  Text,
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
  useToast,
  Spacer,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import dayjs from "dayjs";
import { useUser } from "@/hooks/useUser";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "@chakra-ui/next-js";
import UpdateBoardModal from "@/components/board/UpdateBoardModal";

function Page({ params }: { params: { id: string } }) {
  const boardId = Number(params.id);
  const { isLoggedIn, user } = useUser();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading, error } = useBoardQuery({
    variables: { boardId: boardId },
  });
  const [likeBoard, { loading: likeBoardLoading }] = useLikeBoardMutation({
    variables: { boardId: boardId },
    update: (cache, fetchResult) => {
      const currentBoard = cache.readQuery<BoardQuery, BoardQueryVariables>({
        query: BoardDocument,
        variables: { boardId: boardId },
      });

      if (!currentBoard) return;
      if (!currentBoard.board) return;
      if (!fetchResult.data?.likeBoard) return;

      cache.writeQuery<BoardQuery, BoardQueryVariables>({
        query: BoardDocument,
        variables: { boardId: currentBoard.board.id },
        data: {
          __typename: "Query",
          ...currentBoard,
          board: {
            ...currentBoard.board,
            likes: data?.board?.isLike
              ? currentBoard.board.likes - 1
              : currentBoard.board.likes + 1,
            isLike: !data?.board?.isLike,
          },
        },
      });
    },
  });

  const clickLike = useCallback(() => {
    if (!isLoggedIn) {
      toast({
        title: "로그인을 해주세요",
        status: "error",
      });
      return;
    }

    likeBoard();
  }, [isLoggedIn, likeBoard, toast]);

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
    <>
      <UpdateBoardModal
        isOpen={isOpen}
        onClose={onClose}
        board={data?.board as Board}
      />
      <Box p="6">
        <Flex align="center">
          <Box minW="10">
            <Link href={`/${data?.board?.writer.userId}`}>
              <SkeletonCircle size="10" />
            </Link>
          </Box>
          <Box pl="6">
            <Link href={`/${data?.board?.writer.userId}`}>
              <Text fontWeight="bold">{data?.board?.writer.username}</Text>
            </Link>
            <Link href={`/${data?.board?.writer.userId}`}>
              <Text color="gray.500">{`@${data?.board?.writer.userId}`}</Text>
            </Link>
          </Box>
          <Spacer />
          {isLoggedIn && user?.id === data?.board?.writerId && (
            <Box>
              <Menu boundary="scrollParent">
                <MenuButton
                  as={IconButton}
                  aria-label="Dots"
                  icon={<Icon as={BsThreeDotsVertical} color="gray.500" />}
                  variant="none"
                />
                <MenuList>
                  <MenuItem onClick={onOpen}>수정하기</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </Flex>
        <Box pt="4" style={{ whiteSpace: "pre-wrap" }}>
          {data?.board?.content}
        </Box>
        <Flex py="5" gap="1">
          <Text color="gray.500">
            {dayjs(data?.board?.createDate).format("a") === "am"
              ? "오전"
              : "오후"}
            {dayjs(data?.board?.createDate).format(
              ` hh:mm · YYYY년 MM월 D일 · `
            )}
          </Text>
          <Text fontWeight="bold">{` ${data?.board?.views} `}</Text>
          <Text color="gray.500">{` 조회수 `}</Text>
        </Flex>
        <Flex gap="2" p="2" align="center" borderY="1px" borderColor="gray.100">
          <Icon as={FaRegComment} color="gray.500" />
          <Text color="gray.500">{data?.board?.reviews}</Text>
          <Flex
            gap="2"
            align="center"
            cursor="pointer"
            onClick={clickLike}
            pointerEvents={likeBoardLoading ? "none" : "auto"}
          >
            {data?.board?.isLike ? (
              <Icon as={BsHeartFill} color="red.500" />
            ) : (
              <Icon as={BsHeart} color="gray.500" />
            )}
            <Text color="gray.500" fontSize="sm">
              {data?.board?.likes}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Page;
