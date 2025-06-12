import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export default function EditBtn() {
  return (
    <button
      className={
        "border-b border-b-primary-800 flex place-content-center cursor-pointer hover:bg-accent-500 transition-all hover:text-primary-900"
      }
    >
      <div className={"flex space-x-3 items-center"}>
        <PencilSquareIcon width={30} height={30} />
        <span>Edit</span>
      </div>
    </button>
  );
}
