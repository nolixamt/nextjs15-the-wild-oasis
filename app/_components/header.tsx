"use client";

import React from "react";
import Navigation from "@/app/_components/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`px-8 py-5 text-xl font-semibold border-b ${isHomePage ? "border-transparent" : "border-b-primary-800"}`}
    >
      <Navigation />
    </header>
  );
}
