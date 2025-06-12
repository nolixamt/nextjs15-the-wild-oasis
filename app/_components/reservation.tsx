import React from "react";
import { TBooking } from "@/app/_lib/types";
import { getCabinById } from "@/app/_lib/actions";
import Image from "next/image";
import EditBtn from "@/app/_components/edit-btn";
import DeleteBtn from "@/app/_components/delete-btn";

type ReservationProps = {
  reservation: TBooking;
};

export default async function Reservation({ reservation }: ReservationProps) {
  const cabin = await getCabinById(reservation.cabinId);

  return (
    <div
      className={
        "grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] relative border border-primary-800 text-2xl font-normal hover:scale-101 transition-all"
      }
    >
      <div className={"relative"}>
        <Image
          src={cabin.image}
          fill
          alt={`Image of cabin ${cabin.name}`}
          className={"object-cover"}
        />
      </div>
      <div className={"p-6 space-y-8 border-r border-r-primary-800"}>
        <p>
          {reservation.numNights} nights in Cabin {cabin.name}
        </p>

        <p>
          <span className={"text-accent-500 mr-6"}>
            ${reservation.totalPrice}
          </span>
          <span>{reservation.numGuests} guests</span>
        </p>
      </div>
      <div className={"grid grid-rows-2"}>
        <EditBtn />
        <DeleteBtn bookingId={reservation.id} />
      </div>
    </div>
  );
}
