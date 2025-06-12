import React from "react";
import { getBookings } from "@/app/_lib/actions";
import Reservation from "@/app/_components/reservation";

export default async function ReservationList() {
  const bookings = await getBookings();

  return (
    <div className={"space-y-5"}>
      {bookings.map((booking) => (
        <Reservation reservation={booking} key={booking.id} />
      ))}
    </div>
  );
}
