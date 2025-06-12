import React from "react";
import H2 from "@/app/_components/h2";
import ReservationList from "@/app/_components/reservation-list";

export default function Page() {
  return (
    <div>
      <H2>Your reservations</H2>
      <ReservationList />
    </div>
  );
}
