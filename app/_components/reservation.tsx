import React, { useEffect, useState } from "react";
import { TBooking, TCabin } from "@/app/_lib/types";
import { getCabinById } from "@/app/_lib/actions";
import Image from "next/image";
import EditBtn from "@/app/_components/edit-btn";
import DeleteBtn from "@/app/_components/delete-btn";
import Spinner from "@/app/_components/spinner";

type ReservationProps = {
  reservation: TBooking;
  optimisticDelete: (id: number) => void;
};

export default function Reservation({
  reservation,
  optimisticDelete,
}: ReservationProps) {
  const [cabin, setCabin] = useState<TCabin | null>(null);

  useEffect(() => {
    async function fetchCabin() {
      const data = await getCabinById(reservation.cabinId);
      setCabin(data);
    }
    fetchCabin();
  }, [reservation.cabinId]);

  if (!cabin) return;

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
        <DeleteBtn
          bookingId={reservation.id}
          optimisticDeleteAction={optimisticDelete}
        />
      </div>
    </div>
  );
}
