import React from "react";
import H2 from "@/app/_components/h2";
import ReservationList from "@/app/_components/reservation-list";
import { getBookings } from "@/app/_lib/actions";

export default async function Page() {
  const bookings = await getBookings();
  return (
    <div>
      <H2>Your reservations</H2>
      <ReservationList bookings={bookings} />
    </div>
  );
}
