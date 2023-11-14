"use client";
import {
  SignUpMutationVariables,
  useSignUpMutation,
} from "@/generated/graphql";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [signUp, { loading }] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpMutationVariables>();
  const router = useRouter();
  const toast = useToast();

  const onSubmit = async (formData: SignUpMutationVariables) => {
    const { signUpInput } = formData;
    try {
      const res = await signUp({ variables: { signUpInput } });
      if (res.data?.signUp) {
        router.push("/");
        onClose();
        toast({ title: "회원가입을 환영합니다!", status: "success" });
      } else {
        toast({
          title: "회원가입 도중 문제가 발생했습니다.",
          status: "error",
        });
      }
    } catch (err) {
      toast({
        title: "이메일 또는 유저 아이디가 중복됩니다.",
        status: "error",
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent maxW="md" as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>환영합니다!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h2" pb="6">
              계정을 생성하세요
            </Heading>
            <VStack spacing={4}>
              <FormControl isInvalid={!!errors.signUpInput?.email}>
                <FormLabel>이메일</FormLabel>
                <Input
                  type="email"
                  placeholder="community@hooking.com"
                  {...register("signUpInput.email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "이메일의 형식이 올바르지 않습니다.",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.signUpInput?.email &&
                    errors.signUpInput.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.signUpInput?.password}>
                <FormLabel>암호</FormLabel>
                <Input
                  type="password"
                  placeholder="8자 이상의 영문, 숫자, 특수문자"
                  {...register("signUpInput.password", {
                    required: "암호를 입력해주세요",
                    min: {
                      value: 8,
                      message: "비밀번호는 8자 이상이어야 합니다.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                      message:
                        "암호는 문자,숫자,특수 문자를 포함한 8자 이상이어야 합니다.",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.signUpInput?.password &&
                    errors.signUpInput.password.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.signUpInput?.username}>
                <FormLabel>이름</FormLabel>
                <Input
                  type="text"
                  placeholder="김후킹"
                  {...register("signUpInput.username", {
                    required: "이름을 입력해주세요",
                  })}
                />
                <FormErrorMessage>
                  {errors.signUpInput?.username &&
                    errors.signUpInput.username.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.signUpInput?.userId}>
                <FormLabel>유저 아이디</FormLabel>
                <Input
                  type="text"
                  placeholder="hooking"
                  {...register("signUpInput.userId", {
                    required: "유저 아이디를 입력해주세요",
                  })}
                />
                <FormErrorMessage>
                  {errors.signUpInput?.userId &&
                    errors.signUpInput.userId.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              size="lg"
              w="95%"
              borderRadius="20"
            >
              가입하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUpModal;
