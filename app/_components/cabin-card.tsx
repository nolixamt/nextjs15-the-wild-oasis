import React from "react";
import Image from "next/image";
import H3 from "@/app/_components/h3";
import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { TCabin } from "@/app/_lib/types";

type CabinCardProps = {
  cabin: TCabin;
};

export default function CabinCard({ cabin }: CabinCardProps) {
  const { id, discount, image, name, maxCapacity, regularPrice } = cabin;

  return (
    <div
      className={
        "grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border border-primary-800"
      }
    >
      <div className={"border-r border-r-primary-800 relative"}>
        <Image
          src={image}
          alt={`Image of cabin ${name}`}
          fill
          className={"object-cover"}
        />
      </div>
      <div className={"grid grid-rows-[1fr_auto]"}>
        <div className={"py-4 px-6"}>
          <H3>Cabin {name}</H3>
          <div className={"flex gap-x-2 mb-6"}>
            <UsersIcon width={20} height={20} className={"text-primary-700"} />
            <p>
              For up to <span className={"font-bold"}>{maxCapacity}</span>{" "}
              guests
            </p>
          </div>
          <div className={"flex justify-end"}>
            <div className={"flex gap-x-2 items-end"}>
              <p className={"text-3xl"}>
                {discount ? (
                  <span>${regularPrice - discount}</span>
                ) : (
                  regularPrice
                )}
              </p>
              <p>
                <span className={"text-primary-700 line-through"}>
                  {discount ? regularPrice : ""}
                </span>{" "}
                / night
              </p>
            </div>
          </div>
        </div>
        <div className={"border-primary-800 text-right border-t"}>
          <Link
            href={`/cabins/${id}`}
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
