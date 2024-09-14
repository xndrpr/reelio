import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { ContentWrapper } from "./layout-styled";
import "./global.css";
import Head from "next/head";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glee",
  description: "Смотреть фильмы бесплатно, в хорошем качестве, без рекламы.",
  openGraph: {
    title: "Glee",
    description: "Смотреть фильмы бесплатно, в хорошем качестве, без рекламы.",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <body className={inter.className}>
        <Providers>
          <ContentWrapper>{children}</ContentWrapper>
        </Providers>
      </body>
    </html>
  );
}
