import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

function AuthBottomNavigation() {
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onClose: onCloseSignUp,
  } = useDisclosure();
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <>
      <SignUpModal isOpen={isOpenSignUp} onClose={onCloseSignUp} />
      <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} />
      <Flex
        bgColor="white"
        w={["100%", "446px"]}
        h="14"
        position="fixed"
        bottom="0"
        justify="space-around"
        align="center"
        flexGrow="1"
        backgroundColor="#1da1fe"
      >
        <Button
          w="40%"
          colorScheme="#1da1fe"
          border="1px"
          borderColor="#ffffff"
          borderRadius="20"
          onClick={onOpenLogin}
        >
          로그인
        </Button>

        <Button w="40%" borderRadius="20" onClick={onOpenSignUp}>
          가입하기
        </Button>
      </Flex>
    </>
  );
}

export default AuthBottomNavigation;
