import React from "react";
import { TFilter } from "@/app/_lib/types";

type ButtonProps = {
  btnTxt: string;
  filter: TFilter;
  onHandleFilter: (filter: TFilter) => void;
  activeFilter: string;
};

export default function Button({
  btnTxt,
  filter,
  onHandleFilter,
  activeFilter,
}: ButtonProps) {
  return (
    <button
      className={`py-2 px-3 hover:bg-primary-800 transition-all ${activeFilter === filter ? "bg-primary-800" : ""}`}
      onClick={() => onHandleFilter(filter)}
    >
      {btnTxt}
    </button>
  );
}
