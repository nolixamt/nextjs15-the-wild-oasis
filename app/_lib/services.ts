import "server-only";

import { supabase } from "./supabase";
import { TCabin } from "./types";
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

const fetchCountries = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flag",
  );

  if (!res.ok) {
    throw Error("Error while fetching");
  }

  return await res.json();
};

const getGuestById = async (id: number) => {
  const { data, error } = await supabase
    .from("guests")
    .select(`id, fullName, email, nationality, nationalID, countryFlag`)
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`Something went wrong - ${error}`);
  }

  return data;
};

const Services = { getCabins, getCabinById, fetchCountries, getGuestById };
export default Services;
