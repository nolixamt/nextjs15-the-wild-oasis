"use client";

import React from "react";
import HeaderNavigation from "@/app/_components/header-navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`px-8 py-5 text-xl font-semibold border-b ${isHomePage ? "border-transparent" : "border-b-primary-900"}`}
    >
      <HeaderNavigation />
    </header>
  );
}
