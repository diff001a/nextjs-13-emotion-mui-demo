import { SignIn, SignOut } from "./actions";
import { unstable_getServerSession } from "next-auth/next";
import { HeaderWrapper } from "./styles";
import Link from "next/link";

export default async function Header() {
  const session = await unstable_getServerSession();

  return (
    <HeaderWrapper>
      <div className="inner">
        <nav>
          <ul>
            <li>
              <Link href="/">top</Link>
            </li>
            <li>
              <Link href="/components">components</Link>
            </li>
          </ul>
        </nav>
        {session?.user ? (
          <>
            <span
              style={{
                lineHeight: "1.2",
              }}
            >
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <SignOut />
          </>
        ) : (
          <>
            <span>You are not signed in</span>
            <SignIn />
          </>
        )}
      </div>
    </HeaderWrapper>
  );
}
