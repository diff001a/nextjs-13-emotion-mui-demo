import { Typography } from "@/components/atoms";
import Link from "next/link";

export default function Page() {
  return (
    <div className="wrapper">
      <div className="inner">
        <Typography variant="h2" className="border">
          Dashboard Setting
        </Typography>
        <Typography>
          このページはログインしている人しかアクセスできません
        </Typography>
        <Link href="/dashboard">dashboard</Link>
      </div>
    </div>
  );
}
