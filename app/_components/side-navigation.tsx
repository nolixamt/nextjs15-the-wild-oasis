"use client";

import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className={"h-6 w-6 text-primary-600"} />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarIcon className={"h-6 w-6 text-primary-600"} />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className={"h-6 w-6 text-primary-600"} />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className={"border-r border-r-primary-900"}>
      <ul className={"flex flex-col gap-y-4 text-lg"}>
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={`flex items-center gap-x-4 hover:bg-primary-900 py-2 px-4 ${pathname === navLink.href ? "bg-primary-900" : ""}`}
          >
            {navLink.icon}
            <span>{navLink.name}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
