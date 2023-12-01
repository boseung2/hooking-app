import {
  Board,
  BoardDocument,
  BoardQuery,
  BoardQueryVariables,
  BoardsDocument,
  useLikeBoardMutation,
} from "@/generated/graphql";
import {
  Box,
  Flex,
  Icon,
  SkeletonCircle,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaRegComment, FaEye } from "react-icons/fa";
import { useUser } from "@/hooks/useUser";
import { Link } from "@chakra-ui/next-js";
import { BsHeart, BsHeartFill } from "react-icons/bs";

dayjs.extend(relativeTime);

type BoardCardProps = {
  board: Board;
  refetchBoards: any;
};

function BoardCard({ board, refetchBoards }: BoardCardProps) {
  const toast = useToast();
  const { user, isLoggedIn } = useUser();
  const [likeBoard, { loading: likeBoardLoading }] = useLikeBoardMutation({
    variables: { boardId: board.id },

    refetchQueries: [{ query: BoardsDocument }],

    //TODO:  refetch 로직 다시 짜기
    // update: (cache, fetchResult) => {
    //   const currentBoard = cache.readQuery<BoardQuery, BoardQueryVariables>({
    //     query: BoardDocument,
    //     variables: { boardId: board.id },
    //   });

    //   console.log(currentBoard);
    //   if (!currentBoard) return;
    //   if (!currentBoard.board) return;
    //   if (!fetchResult.data?.likeBoard) return;

    //   cache.writeQuery<BoardQuery, BoardQueryVariables>({
    //     query: BoardDocument,
    //     variables: { boardId: currentBoard.board.id },
    //     data: {
    //       __typename: "Query",
    //       ...currentBoard,
    //       board: {
    //         ...currentBoard.board,
    //         likes: board.isLike
    //           ? currentBoard.board.likes - 1
    //           : currentBoard.board.likes + 1,
    //         isLike: !board.isLike,
    //       },
    //     },
    //   });
    // },
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
    refetchBoards();
  }, [isLoggedIn, likeBoard, toast, refetchBoards]);

  return (
    <Box p="6" pb="1">
      <Flex>
        <Box minW="10">
        <Link href={`/${board.writer.userId}`}>
            <SkeletonCircle size="10" />
          </Link>
        </Box>
        <Box pl="6">
          <Flex gap="3">
            <Link href={`/${board.writer.userId}`}>
              <Text fontWeight="bold">{board.writer.username}</Text>
            </Link>
            <Link href={`/${board.writer.userId}`}>
              <Text color="gray.500">{`@${board.writer.userId}`}</Text>
            </Link>
            <Text color="gray.500">{dayjs(board.createDate).fromNow()}</Text>
          </Flex>
          <Link
            href={`/${user?.userId}/board/${board.id}`}
            _hover={{ textDecorationLine: "none" }}
          >
            <Box
              pt={1}
              style={{
                whiteSpace: "pre-wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 10,
                WebkitBoxOrient: "vertical",
                cursor: "pointer",
              }}
            >
              {board.content}
            </Box>
          </Link>
          <Flex gap="2" pt="3" align="center">
            <Link
              href={`/${user?.userId}/board/${board.id}`}
              _hover={{ textDecorationLine: "none" }}
            >
              <Flex gap="2" align="center">
                <Icon as={FaRegComment} color="gray.500" />
                <Text color="gray.500" fontSize="sm">
                  {board.reviews}
                </Text>
              </Flex>
            </Link>
            <Flex
              gap="2"
              align="center"
              cursor="pointer"
              onClick={clickLike}
              pointerEvents={likeBoardLoading ? "none" : "auto"}
            >
              {board.isLike ? (
                <Icon as={BsHeartFill} color="red.500" />
              ) : (
                <Icon as={BsHeart} color="gray.500" />
              )}
              <Text color="gray.500" fontSize="sm">
                {board.likes}
              </Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon as={FaEye} color="gray.500" fontSize="sm" />
              <Text color="gray.500">{board.views}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default BoardCard;
