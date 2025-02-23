import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@organisms/NavBar";
import Footer from "@organisms/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "스피드 게임",
  description: "스피드 게임을 플레이 하기 위한 사이트입니다.",
  openGraph: {
    title: "스피드 게임",
    description: "스피드 게임을 플레이 하기 위한 사이트입니다.",
    url: "https://speed-game-test.netlify.app/",
  },
  verification: {
    google: "0zb3O-_c81yqRYVLi9vm0yDq3rqW7iQcVnrCGdynCnI",
  },
  other: {
    'naver-site-verification': 'abdc6064da9400e80442e96f822c69ed92f9c44e',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-QYNCFZY3CS" />
    </html>
  );
}
