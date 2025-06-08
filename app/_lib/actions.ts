"use server";

import Services from "@/app/_lib/services";

export const getCabins = async () => {
  return Services.fetchCabins();
};
