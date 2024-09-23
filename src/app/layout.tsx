import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { ContentWrapper } from "./layout-styled";
import GoogleAnalytics from "@/components/google-analytics";
import { GlobalStyles } from "./global-styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE_URL || ""),
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
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />

          <ContentWrapper>{children}</ContentWrapper>
        </Providers>
      </body>
    </html>
  );
}
