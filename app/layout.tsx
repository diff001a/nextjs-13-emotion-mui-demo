import Header from "./header";
import EmotionRoot from "@/components/styles/EmotionRoot";
import GlobalMui from "@/components/styles/GlobalMui";
import { GlobalStyle } from "./styles";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <head />
      <body>
        <EmotionRoot>
          <GlobalMui>
            {/** @ts-expect-error */}
            <Header />
            <main>{children}</main>
            <GlobalStyle />
          </GlobalMui>
        </EmotionRoot>
      </body>
    </html>
  );
}
