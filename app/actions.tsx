"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/atoms";
import LoginModal from "@/components/molecules/LoginModal";

export function SignOut() {
  return (
    <Button onClick={() => signOut()} variant="text">
      Sign out
    </Button>
  );
}

export function SignIn() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Sign in</Button>
      <LoginModal open={open} setOpen={setOpen} />
    </>
  );
}
