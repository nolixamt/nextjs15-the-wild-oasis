"use client";

import React, { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "@/app/_lib/actions";
import SpinnerMini from "@/app/_components/spinner-mini";

type DeleteBtnProps = {
  bookingId: number;
};

export default function DeleteBtn({ bookingId }: DeleteBtnProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deleteReservation(bookingId);
    });
  };
  return (
    <button
      onClick={handleDelete}
      className={
        "border-b border-b-primary-800 flex place-content-center cursor-pointer hover:bg-accent-500 transition-all hover:text-primary-900"
      }
    >
      <div className={"flex space-x-3 items-center"}>
        {isPending ? (
          <SpinnerMini />
        ) : (
          <>
            <TrashIcon width={30} height={30} />
            <span>Delete</span>
          </>
        )}
      </div>
    </button>
  );
}
