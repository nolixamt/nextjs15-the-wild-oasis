import React from "react";
import CabinCard from "@/app/_components/cabin-card";
import H1 from "@/app/_components/h1";

export default function Page() {
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
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 "}>
        <CabinCard />
        <CabinCard />
        <CabinCard />
        <CabinCard />
        <CabinCard />
      </div>
    </>
  );
}
