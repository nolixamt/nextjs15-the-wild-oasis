import React from "react";
import Navigation from "@/app/_components/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={
        "px-8 py-5 text-xl font-semibold border-b border-b-primary-800"
      }
    >
      <div className={"max-w-7xl mx-auto flex justify-between items-center"}>
        <div className={"flex gap-x-4 items-center"}>
          <Image
            src={logo}
            alt={"Header - The wild oasis Logo"}
            height={70}
            width={70}
          />
          <p>The Wild Oasis</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
