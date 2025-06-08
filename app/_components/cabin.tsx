import React from "react";
import { TCabin } from "@/app/_lib/types";

type CabinProps = {
  cabin: TCabin;
};

export default function Cabin({ cabin }: CabinProps) {
  const { id, discount, image, name, maxCapacity, regularPrice } = cabin;

  return <div>Cabin {cabin?.name}</div>;
}
