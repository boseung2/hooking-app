import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SkeletonCircle,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AutoResizeTextarea } from "./AutoResizeTextarea";
import {
  Board,
  UpdateBoardMutationVariables,
  useUpdateBoardMutation,
} from "@/generated/graphql";
import { useForm } from "react-hook-form";

interface UpdateBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  board: Board;
}

function UpdateBoardModal({ isOpen, onClose, board }: UpdateBoardModalProps) {
  const [updateBoard, { loading }] = useUpdateBoardMutation({
    refetchQueries: ["Board"],
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateBoardMutationVariables>({
    defaultValues: {
      updateBoardInput: {
        id: board.id,
        content: board.content,
        type: board.content,
      },
    },
  });
  const toast = useToast();

  useEffect(() => {
    setValue("updateBoardInput.id", board.id);
    setValue("updateBoardInput.content", board.content);
    setValue("updateBoardInput.type", board.type);
  }, [isOpen, board, setValue]);

  const onSubmit = async (formData: UpdateBoardMutationVariables) => {
    const { data } = await updateBoard({
      variables: formData,
    });

    if (!data?.updateBoard.id) {
      toast({ title: "게시글 수정 중 오류가 발생했습니다", status: "error" });
    }
    if (data?.updateBoard.id) {
      toast({ title: "게시글을 수정했습니다", status: "success" });
      onClose();
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent maxW="md" as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <ModalCloseButton left={4} top={4} />
          <Flex justify="end">
            <Button
              colorScheme="blue"
              size="sm"
              w={20}
              borderRadius={20}
              fontWeight="bold"
              type="submit"
              isLoading={loading}
            >
              수정하기
            </Button>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Flex>
            <Box minW="10" mr={4}>
              <SkeletonCircle size="10" />
            </Box>
            <Box w="100%">
              <FormControl isInvalid={!!errors.updateBoardInput?.content}>
                <AutoResizeTextarea
                  placeholder="리뷰를 작성해 주세요"
                  variant="unstyled"
                  {...register("updateBoardInput.content")}
                />
                <FormErrorMessage>
                  {errors.updateBoardInput?.content &&
                    errors.updateBoardInput.content.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <Input
                  type="hidden"
                  // TODO: 게시글 카테고리 다양화 후 Select로 변경
                  {...register("updateBoardInput.type", { value: "review" })}
                />
              </FormControl>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UpdateBoardModal;
