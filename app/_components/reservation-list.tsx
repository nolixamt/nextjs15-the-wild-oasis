"use client";

import React, { useOptimistic } from "react";
import Reservation from "@/app/_components/reservation";
import { TBooking } from "@/app/_lib/types";

export default function ReservationList({
  bookings,
}: {
  bookings: TBooking[];
}) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );
  return (
    <div className={"space-y-5"}>
      {optimisticBookings.map((booking) => (
        <Reservation
          reservation={booking}
          key={booking.id}
          optimisticDelete={optimisticDelete}
        />
      ))}
    </div>
  );
}
