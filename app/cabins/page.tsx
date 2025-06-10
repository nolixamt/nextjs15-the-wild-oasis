import React, { Suspense } from "react";
import H1 from "@/app/_components/h1";
import CabinList from "@/app/_components/cabin-list";
import Filter from "@/app/_components/filter";
import { TFilter } from "@/app/_lib/types";
import Spinner from "@/app/_components/spinner";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ capacity: TFilter }>;
}) {
  const filter = (await searchParams).capacity ?? "all";

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

      <Filter />

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </>
  );
}
