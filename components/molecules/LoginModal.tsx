"use client";

import styled from "@emotion/styled";
import { signIn } from "next-auth/react";
import { Modal, Button } from "../atoms";
import Image from "next/image";

type ComponentType = {
  open: boolean;
  setOpen: any;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;

const LoginModal = ({ open, setOpen, ...props }: ComponentType) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Wrapper>
        <Image src="/vercel.svg" alt="logo" width={300} height={50} />
        <Button width="100%" onClick={() => signIn("google")} height="45px">
          Googleでログイン
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default LoginModal;
