"use client";

import React from "react";
import Button from "@/app/_components/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TFilter } from "@/app/_lib/types";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleFilter = (filter: TFilter) => {
    const params = new URLSearchParams(searchParams);

    if (filter) params.set("capacity", filter);
    else params.delete("capacity");

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className={"mb-8 flex justify-end"}>
      <div className={"inline-block border border-primary-800"}>
        <Button
          btnTxt={"all cabins"}
          filter={"all"}
          onHandleFilter={handleFilter}
          activeFilter={activeFilter}
        />
        <Button
          btnTxt={"1 - 3 guests"}
          filter={"small"}
          onHandleFilter={handleFilter}
          activeFilter={activeFilter}
        />
        <Button
          btnTxt={"4 - 7 guests"}
          filter={"medium"}
          onHandleFilter={handleFilter}
          activeFilter={activeFilter}
        />
        <Button
          btnTxt={"8 - 12 guests"}
          filter={"large"}
          onHandleFilter={handleFilter}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
}
