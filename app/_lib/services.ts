import "server-only";

import { supabase } from "./supabase";
import { TCabin } from "./types";
import { notFound } from "next/navigation";

const fetchCabins = async (): Promise<TCabin[]> => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error || !data) {
    console.error(error || `Cabins not found`);
    notFound();
  }

  return data;
};

const fetchCabinById = async (id: string): Promise<TCabin> => {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single<TCabin>();

  if (error || !data) {
    console.error(error || `Cabin with id ${id} not found`);
    notFound();
  }

  return data;
};

const Services = { fetchCabins, fetchCabinById };
export default Services;
