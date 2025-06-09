import React from "react";
import CabinCard from "@/app/_components/cabin-card";
import { TCabin } from "@/app/_lib/types";

type CabinListProps = {
  cabins: TCabin[];
};

export default function CabinList({ cabins }: CabinListProps) {
  return (
    <div className={"grid grid-cols-1 2md:grid-cols-2 gap-10 "}>
      {cabins.map((cabin) => {
        return <CabinCard key={cabin.id} cabin={cabin} />;
      })}
    </div>
  );
}
