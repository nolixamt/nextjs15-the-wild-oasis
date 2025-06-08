import "server-only";

import { supabase } from "./supabase";
import { TCabin } from "./types";

const fetchCabins = async (): Promise<TCabin[]> => {
  let { data, error }: { data: TCabin[] | null; error: any } = await supabase
    .from("cabins")
    .select(
      `id, name, maxCapacity, regularPrice, discount, description, image`,
    );

  if (error) {
    console.error(error);
  }
  return data || [];
};

const Services = { fetchCabins };

export default Services;
