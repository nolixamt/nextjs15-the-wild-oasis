import React from "react";
import H1 from "@/app/_components/h1";
import CabinList from "@/app/_components/cabin-list";
import { getCabins } from "@/app/_lib/actions";

export default async function Page() {
  const cabins = await getCabins();
  const sortedCabins = [...cabins].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <H1>Our Luxury Cabins</H1>
      <p className={"text-primary-200 mb-10"}>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <CabinList cabins={sortedCabins} />
    </>
  );
}
