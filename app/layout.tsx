import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/_components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "Explore the wild oasis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-primary-950 text-primary-100 grid grid-rows-[auto_1fr] font-semibold`}
      >
        <Header />
        <div className={"px-8 py-12"}>
          <main className={"max-w-7xl mx-auto h-full"}>{children}</main>
        </div>
      </body>
    </html>
  );
}
