import React from "react";
import Link from "next/link";

const links = [
  {
    name: "Cabins",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Guest area",
    href: "#",
  },
];

export default function Navigation() {
  return (
    <ul className={"flex gap-x-16"}>
      {links.map((link) => (
        <li className={"hover:text-accent-500"}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
