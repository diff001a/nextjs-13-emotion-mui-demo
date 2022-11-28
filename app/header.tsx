import Link from "next/link";
import { HeaderWrapper } from "./styles";
import User from "@/components/molecules/User";

export default async function Header() {
  return (
    <HeaderWrapper>
      <div className="inner">
        <nav>
          <ul>
            <li>
              <Link href="/">top</Link>
            </li>
            <li>
              <Link href="/page2">components</Link>
            </li>
          </ul>
        </nav>
        <User />
      </div>
    </HeaderWrapper>
  );
}
