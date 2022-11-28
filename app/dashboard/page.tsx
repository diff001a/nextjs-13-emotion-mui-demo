"use client";

import { Typography } from "@/components/atoms";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div className="wrapper">
      <div className="inner">
        <Typography variant="h2" className="border">
          Hello, {session?.user?.email}
        </Typography>
        <Typography>
          このページはログインしている人しかアクセスできません
        </Typography>
        <Link href="/dashboard/setting">setting</Link>
      </div>
    </div>
  );
}
