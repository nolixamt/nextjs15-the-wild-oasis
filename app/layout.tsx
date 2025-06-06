import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-primary-900 text-accent-50 grid grid-rows-[auto_1fr]`}
      >
        <header className={"px-8 py-5 text-xl font-semibold"}>
          <div className={"max-w-7xl mx-auto"}>The Wild Oasis</div>
        </header>

        <div className={"px-8 py-12"}>
          <main className={"max-w-7xl mx-auto"}>{children}</main>
        </div>
      </body>
    </html>
  );
}
