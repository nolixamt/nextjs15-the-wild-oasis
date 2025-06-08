import React from "react";
import Image from "next/image";
import cabin1 from "@/public/cabin-001.webp";
import H3 from "@/app/_components/h3";
import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CabinCard() {
  return (
    <div className={"grid grid-cols-[1fr_2fr] border border-primary-800"}>
      <div className={"border-r border-r-primary-800 relative"}>
        <Image
          src={cabin1}
          alt={"Image of cabin 1"}
          fill
          className={"object-cover"}
        />
      </div>
      <div className={"grid grid-rows-[1fr_auto]"}>
        <div className={"py-4 px-6"}>
          <H3>Cabin 001</H3>
          <div className={"flex gap-x-2 mb-6"}>
            <UsersIcon width={20} height={20} className={"text-primary-700"} />
            <p>
              For up to <span className={"font-bold"}>2</span> guests
            </p>
          </div>
          <div className={"flex justify-end"}>
            <div className={"flex gap-x-2 items-end"}>
              <p className={"text-3xl"}>$200</p>
              <p>
                <span className={"text-primary-700 line-through"}>$250</span> /
                night
              </p>
            </div>
          </div>
        </div>
        <div className={"border-primary-800 text-right border-t"}>
          <Link
            href={"#"}
            className={
              " border-l-primary-800 inline-block py-4 px-6 border-l hover:bg-accent-500 hover:text-primary-900 transition-all"
            }
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
