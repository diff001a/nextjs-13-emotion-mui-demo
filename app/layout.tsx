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
            <main>{children}</main>
            <GlobalStyle />
          </GlobalMui>
        </EmotionRoot>
      </body>
    </html>
  );
}
