"use client";

import React from "react";
import { TGuest } from "@/app/_lib/types";

type UpdateProfileFormProps = {
  children: React.ReactNode;
  guest: TGuest;
};

export default function UpdateProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  return (
    <form className={"max-w-2/3 bg-primary-900 p-6 space-y-5"}>
      <div className={"flex flex-col space-y-1"}>
        <label htmlFor={"fullname"}>Full name</label>
        <input
          type="text"
          id={"fullname"}
          name={"fullname"}
          value={guest.fullName}
          className={
            "bg-primary-300 p-2 text-primary-900 disabled:bg-primary-700 disabled:text-primary-400 disabled:cursor-not-allowed"
          }
          disabled
        />
      </div>
      <div className={"flex flex-col space-y-2"}>
        <label htmlFor={"emailaddress"}>Email address</label>
        <input
          type="text"
          id={"emailaddress"}
          name={"emailaddress"}
          value={guest.email}
          className={
            "bg-primary-300 p-2 text-primary-900 disabled:bg-primary-700 disabled:text-primary-400 disabled:cursor-not-allowed"
          }
          disabled
        />
      </div>
      <div className={"flex flex-col space-y-2"}>
        <label htmlFor={"country"}>Where are you from?</label>
        {children}
      </div>

      <div className={"flex flex-col space-y-2"}>
        <label htmlFor={"nationalid"}>National ID number</label>
        <input
          type="text"
          id={"nationalid"}
          name={"nationalid"}
          className={"bg-primary-300 p-2 text-primary-900"}
          defaultValue={guest.nationalID}
        />
      </div>
    </form>
  );
}
