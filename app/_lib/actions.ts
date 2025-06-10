"use server";

import Services from "@/app/_lib/services";

export const getCabins = async () => {
  return Services.getCabins();
};

export const getCabinById = async (id: number) => {
  return Services.getCabinById(id);
};

export const getGuestById = async (id: number) => {
  return Services.getGuestById(id);
};

export const getCountries = async () => {
  return Services.fetchCountries();
};
