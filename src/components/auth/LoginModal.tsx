"use client";
import { LoginMutationVariables, useLoginMutation } from "@/generated/graphql";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Image,
  Heading,
  FormLabel,
  Input,
  VStack,
  FormControl,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [login, { loading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginMutationVariables>();
  const { loadUserByAccessToken } = useUser();

  const onSubmit = async (formData: LoginMutationVariables) => {
    const { data } = await login({ variables: formData });
    if (data?.login.errors) {
      data.login.errors.forEach((err) => {
        const field = "loginInput.";
        setError((field + err.field) as Parameters<typeof setError>[0], {
          message: err.message,
        });
      });
    }

    if (data && data.login.accessToken) {
      loadUserByAccessToken(data.login.accessToken);
      onClose();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent maxW="md" as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <ModalCloseButton left={4} top={3} />
            <Flex justify="center">
              <Image
                src="/assets/logo_black.png"
                alt="Hooking"
                width={20}
                height={6}
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Heading as="h2" pb="6">
              계정을 입력해주세요
            </Heading>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.loginInput?.emailOrUserId}>
                <FormLabel>이메일 또는 유저 아이디</FormLabel>
                <Input
                  type="emailOrUserId"
                  placeholder="이메일 또는 유저 아이디를 입력하세요"
                  {...register("loginInput.emailOrUserId", {
                    required: "이메일 또는 유저 아이디를 입력해주세요",
                  })}
                />
                <FormErrorMessage>
                  {errors.loginInput?.emailOrUserId &&
                    errors.loginInput.emailOrUserId.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.loginInput?.password}>
                <FormLabel>비밀번호</FormLabel>
                <Input
                  type="password"
                  placeholder="************"
                  {...register("loginInput.password", {
                    required: "비밀번호를 입력해주세요",
                  })}
                />
                <FormErrorMessage>
                  {errors.loginInput?.password &&
                    errors.loginInput.password.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading}
              size="lg"
              w="95%"
              borderRadius="20"
            >
              로그인 하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
