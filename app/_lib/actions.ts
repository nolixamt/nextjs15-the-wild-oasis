// noinspection UnnecessaryLocalVariableJS

"use server";

import Services from "@/app/_lib/services";
import { revalidatePath } from "next/cache";

export const getCabins = async () => {
  const data = await Services.getCabins();

  return data;
};

export const getCabinById = async (id: number) => {
  const data = await Services.getCabinById(id);

  return data;
};

export const deleteReservation = async (bookingId: number) => {
  await new Promise((res) => setTimeout(res, 2000));
  throw new Error();

  await Services.deleteReservation(bookingId);

  revalidatePath("/account/reservations");
};

export const getGuestById = async (id: number) => {
  const data = await Services.getGuestById(id);

  return data;
};

export const getCountries = async () => {
  const data = await Services.fetchCountries();

  return data;
};

export const getBookings = async () => {
  const data = await Services.getBookings();

  return data;
};

export const updateProfileData = async (formData: FormData) => {
  // Information about logged user
  const id = 1;

  // alphanumeric from 6-12 characters
  const regex = /^[a-zA-Z0-9]{6,12}$/;

  const nationality = formData.get("nationality") as string;
  const nationalID = formData.get("nationalID") as string;

  if (!nationality || !nationalID) {
    throw new Error("Nationality and National ID are required");
  }

  if (!regex.test(nationalID)) {
    throw new Error("NationalID must be alphanumeric form 6-12 characters");
  }

  await Services.updateProfileData(id, { nationality, nationalID });

  revalidatePath("/account/profile");
};
