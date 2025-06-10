import React from "react";
import CabinCard from "@/app/_components/cabin-card";
import { TFilter } from "@/app/_lib/types";
import { getCabins } from "@/app/_lib/actions";

type CabinListProps = {
  filter: TFilter;
};

export default async function CabinList({ filter }: CabinListProps) {
  const cabins = await getCabins();
  if (!cabins) return null;

  let filteredCabins;

  switch (filter) {
    case "all":
      filteredCabins = cabins;
      break;
    case "small":
      filteredCabins = [...cabins].filter(
        (cabin) => cabin.maxCapacity >= 1 && cabin.maxCapacity <= 3,
      );
      break;
    case "medium":
      filteredCabins = [...cabins].filter(
        (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 7,
      );
      break;
    case "large":
      filteredCabins = [...cabins].filter(
        (cabin) => cabin.maxCapacity > 7 && cabin.maxCapacity <= 12,
      );
      break;
    default:
      filteredCabins = cabins;
  }

  const sortedCabins = filteredCabins.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className={"grid grid-cols-1 2md:grid-cols-2 gap-10"}>
      {sortedCabins.map((cabin) => {
        return <CabinCard key={cabin.id} cabin={cabin} />;
      })}
    </div>
  );
}
