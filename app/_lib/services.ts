import "server-only";

import { supabase } from "./supabase";
import { TBooking, TCabin, TGuest } from "./types";
import { notFound } from "next/navigation";

const getCabins = async (): Promise<TCabin[]> => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
};

const getCabinById = async (id: number): Promise<TCabin> => {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single<TCabin>();

  if (error) {
    console.log(error);
    notFound();
  }

  return data;
};

const deleteReservation = async (id: number) => {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    throw new Error("Error while deleting cabin");
  }
};

const fetchCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flag",
  );

  if (!res.ok) {
    throw new Error("Error while fetching countries");
  }

  return await res.json();
};

const getGuestById = async (id: number): Promise<TGuest> => {
  const { data, error } = await supabase
    .from("guests")
    .select(`id, fullName, email, nationality, nationalID, countryFlag`)
    .eq("id", id)
    .single<TGuest>();

  if (error) {
    console.log(error);
    throw new Error(`Failed to fetch guest with ID ${id}: ${error.message}`);
  }

  if (!data) {
    throw new Error(`No guest found with ID ${id}`);
  }

  return data;
};

const getBookings = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select(`id, cabinId, numNights, numGuests, totalPrice`);

  if (error) {
    console.log(error);
    throw new Error("Failed to fetch bookings");
  }

  return data as TBooking[];
};

const updateProfileData = async (
  id: number,
  dataToUpdate: { nationality: string; nationalID: string },
) => {
  const { error } = await supabase
    .from("guests")
    .update({
      nationality: dataToUpdate.nationality,
      nationalID: dataToUpdate.nationalID,
    })
    .eq("id", id);

  if (error) {
    throw new Error("Fail to update: ", error);
  }
};

const Services = {
  getCabins,
  getCabinById,
  fetchCountries,
  getGuestById,
  updateProfileData,
  getBookings,
  deleteReservation,
};
export default Services;
