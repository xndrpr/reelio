import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { ContentWrapper } from "./layout-styled";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glee",
  description: "Смотреть фильмы бесплатно, в хорошем качестве, без рекламы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ContentWrapper>{children}</ContentWrapper>
        </Providers>
      </body>
    </html>
  );
}
