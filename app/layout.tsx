import EmotionRoot from "@/components/styles/EmotionRoot";
import GlobalMui from "@/components/styles/GlobalMui";
import { GlobalStyle } from "./styles";
import Header from "./header";
import twemoji from "twemoji";

import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "@/components/contexts/AuthContext";

async function getSession(cookie: string): Promise<Session | null> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: { cookie },
  });
  if (!response?.ok) {
    return null;
  }
  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({ children }: any) {
  const session = await getSession(headers().get("cookie") ?? "");
  return (
    <html>
      <head />
      <body>
        <EmotionRoot>
          <GlobalMui>
            <AuthContext session={session}>
              {/* @ts-ignore */}
              <Header />
              {children}
            </AuthContext>
            <GlobalStyle />
          </GlobalMui>
        </EmotionRoot>
      </body>
    </html>
  );
}
