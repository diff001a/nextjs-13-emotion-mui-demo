"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/atoms";
import { signIn, signOut } from "next-auth/react";
import { Box } from "@mui/material";

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
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <small>Signed in as</small>
          <strong>{session.user?.email}</strong>
        </Box>
        {status === "authenticated" ? <SignOut /> : ""}
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span>{status}</span>
        {status === "unauthenticated" ? <SignIn /> : ""}
      </Box>
    );
  }
}
