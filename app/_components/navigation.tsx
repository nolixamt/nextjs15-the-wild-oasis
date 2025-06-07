import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

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
    <div className={"max-w-7xl mx-auto flex justify-between items-center z-20"}>
      <div className={"flex gap-x-4 items-center"}>
        <Image
          src={logo}
          alt={"Header - The wild oasis Logo"}
          height={70}
          width={70}
        />
        <p>The Wild Oasis</p>
      </div>
      <ul className={"flex gap-x-16"}>
        {links.map((link) => (
          <li className={"hover:text-accent-500"}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
