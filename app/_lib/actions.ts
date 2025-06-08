"use server";

import Services from "@/app/_lib/services";

export const getCabins = async () => {
  return Services.fetchCabins();
};

export const getCabinById = async (id: string) => {
  return Services.fetchCabinById(id);
};
