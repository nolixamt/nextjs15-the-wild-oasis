"use client";

import { TGuest } from "@/app/_lib/types";
import UpdateBtn from "@/app/_components/update-btn";
import { updateProfileData } from "@/app/_lib/actions";
import { ReactNode } from "react";

type UpdateProfileFormProps = {
  children: ReactNode;
  guest: TGuest;
};

export default function UpdateProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  return (
    <form
      action={updateProfileData}
      className={"max-w-2/3 bg-primary-900 p-6 space-y-5"}
    >
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
      <div className={"flex flex-col space-y-2"}>{children}</div>

      <div className={"flex flex-col space-y-2"}>
        <label htmlFor={"nationalID"}>National ID number</label>
        <input
          type="text"
          id={"nationalID"}
          name={"nationalID"}
          className={"bg-primary-300 p-2 text-primary-900"}
          defaultValue={guest.nationalID}
        />
      </div>
      <div className={"flex justify-end"}>
        <UpdateBtn />
      </div>
    </form>
  );
}
