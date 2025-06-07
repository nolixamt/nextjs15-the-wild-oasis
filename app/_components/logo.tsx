import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link className={"flex gap-x-4 items-center"} href={"/"}>
      <Image
        src={logo}
        alt={"Header - The wild oasis Logo"}
        height={70}
        width={70}
      />
      <p>The Wild Oasis</p>
    </Link>
  );
}
