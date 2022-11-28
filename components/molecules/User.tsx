"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/atoms";
import { signIn, signOut } from "next-auth/react";
import { Box } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export function SignOut() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}

export function SignIn() {
  return <Button onClick={() => signIn("google")}>Sign in</Button>;
}

export default function User() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <Wrapper>
        <Link href="/dashboard">
          <small>Signed in as</small>
          <br />
          <strong>{session.user?.email}</strong>
        </Link>
        {status === "authenticated" ? <SignOut /> : ""}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <span>{status}</span>
        {status === "unauthenticated" ? <SignIn /> : ""}
      </Wrapper>
    );
  }
}
