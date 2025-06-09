import React from "react";
import { TCabin } from "@/app/_lib/types";
import Image from "next/image";

type CabinProps = {
  cabin: TCabin;
};

export default function Cabin({ cabin }: CabinProps) {
  const { id, discount, image, name, maxCapacity, regularPrice, description } =
    cabin;

  console.log(image);

  return (
    <div
      className={
        "grid grid-cols-[3fr_4fr] gap-x-22 border border-primary-800 py-3 px-10 mt-12"
      }
    >
      <div className={"relative"}>
        <Image
          src={image}
          alt={`Image of ${name}`}
          className={" object-cover scale-115 -translate-x-[2%]"}
          fill
        />
      </div>
      <div>
        <p
          className={
            "text-7xl bg-primary-950 inline-block p-3 px-5 -translate-x-2/3 mb-5"
          }
        >{`Cabin ${name}`}</p>
        <div className={"space-y-3 mb-6 pr-10"}>
          <p className={"text-primary-300 mb-10"}>{description}</p>
          <p>
            For up <span className={"font-extrabold"}>{maxCapacity}</span>{" "}
            guests
          </p>
          <p>Located in the hear of Dolomites (Italy)</p>
          <p>
            Privacy <span className={"font-extrabold"}>100% </span>
            guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}
