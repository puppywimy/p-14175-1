import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이트 A",
  description: "스프링부트, Next.js 연동",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <header>
          <nav className="flex items-center gap-2 px-4 py-2 border-b">
            <Link href="/" className="p-2 rounded hover:bg-gray-100">
              메인
            </Link>
            <Link href="/posts" className="p-2 rounded hover:bg-gray-100">
              글 목록
            </Link>
          </nav>
        </header>
        <main className="flex-grow flex flex-col p-2">{children}</main>
        <footer className="px-4 py-2 border-t text-center">푸터</footer>
      </body>
    </html>
  );
}
