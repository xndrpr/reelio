import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE_URL || ""),
  title: "Reelio",
  description: "Смотреть фильмы бесплатно, в хорошем качестве, без рекламы.",
  openGraph: {
    title: "Reelio",
    description: "Смотреть фильмы бесплатно, в хорошем качестве, без рекламы.",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
  other: {
    "yandex-verification": "9c5ef6afb1204ea1",
  },
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
          <div className="flex w-dvw justify-center items-center">
            <div className="px-20 py-8 w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
