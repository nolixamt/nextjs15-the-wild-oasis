import React from "react";
import Link from "next/link";
import Logo from "@/app/_components/logo";

const navLinks = [
  {
    name: "Cabins",
    href: "/cabins",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Guest area",
    href: "account",
  },
];

export default function HeaderNavigation() {
  return (
    <nav className={"max-w-7xl mx-auto flex justify-between items-center z-20"}>
      <Logo />
      <ul className={"flex gap-x-16"}>
        {navLinks.map((navLink) => (
          <li className={"hover:text-accent-400"} key={navLink.href}>
            <Link href={navLink.href}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
