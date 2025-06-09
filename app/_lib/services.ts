import "server-only";

import { supabase } from "./supabase";
import { TCabin } from "./types";
import { notFound } from "next/navigation";

const fetchCabins = async (): Promise<TCabin[]> => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
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

  if (error) {
    console.log(error);
    notFound();
  }

  return data;
};

const Services = { fetchCabins, fetchCabinById };
export default Services;
