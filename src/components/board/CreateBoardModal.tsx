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
  Select,
  SkeletonCircle,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AutoResizeTextarea } from "./AutoResizeTextarea";
import {
  CreateBoardMutationVariables,
  useBoardsQuery,
  useCreateBoardMutation,
} from "@/generated/graphql";
import { useForm } from "react-hook-form";

interface CreateBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CreateBoardModal({ isOpen, onClose }: CreateBoardModalProps) {
  const [createBoard, { loading }] = useCreateBoardMutation({
    refetchQueries: ["Boards"],
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBoardMutationVariables>();
  const toast = useToast();

  const onSubmit = async (formData: CreateBoardMutationVariables) => {
    const { data } = await createBoard({
      variables: formData,
    });

    if (!data?.createBoard.id) {
      toast({ title: "게시글 업로드 중 오류가 발생했습니다", status: "error" });
    }
    if (data?.createBoard.id) {
      toast({ title: "게시글을 작성했습니다", status: "success" });
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
              게시하기
            </Button>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Flex>
            <Box minW="10" mr={4}>
              <SkeletonCircle size="10" />
            </Box>
            <Box w="100%">
              <FormControl isInvalid={!!errors.createBoardInput?.content}>
                <AutoResizeTextarea
                  placeholder="리뷰를 작성해 주세요"
                  variant="unstyled"
                  {...register("createBoardInput.content")}
                />
                <FormErrorMessage>
                  {errors.createBoardInput?.content &&
                    errors.createBoardInput.content.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <Input
                  type="hidden"
                  // TODO: 게시글 카테고리 다양화 후 Select로 변경
                  {...register("createBoardInput.type", { value: "review" })}
                />
              </FormControl>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CreateBoardModal;
