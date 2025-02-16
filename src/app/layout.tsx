import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@organisms/NavBar";
import Footer from "@organisms/Footer";

export const metadata: Metadata = {
  title: "스피드 게임",
  description: "스피드 게임을 플레이 하기 위한 사이트입니다.",
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
    </html>
  );
}
