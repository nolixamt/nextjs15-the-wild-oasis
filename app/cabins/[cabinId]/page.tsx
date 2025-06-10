import React from "react";
import { getCabinById } from "@/app/_lib/actions";
import Cabin from "@/app/_components/cabin";

export default async function Page({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}) {
  const { cabinId } = await params;
  const cabin = await getCabinById(parseInt(cabinId));

  return <Cabin cabin={cabin} />;
}
