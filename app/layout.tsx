import type { Metadata, Viewport } from "next";
import { M_PLUS_1 } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider"

const mPlus1 = M_PLUS_1({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "技術ブログ",
  description: "技術ブログ",
};

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={mPlus1.className}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
