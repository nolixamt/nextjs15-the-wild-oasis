import React from "react";
import { TGuest } from "@/app/_lib/types";
import { sortCountries } from "@/app/_lib/utils";
import { getCountries } from "@/app/_lib/actions";

type SelectCountryProps = {
  guest: TGuest;
};

export default async function SelectCountry({ guest }: SelectCountryProps) {
  const countries = sortCountries(await getCountries());

  const defaultCountry = guest.nationality;

  const flag = countries.find(
    (c: any) => c.name.common === defaultCountry,
  )?.flag;

  return (
    <>
      <div className={"flex justify-between items-center"}>
        <label htmlFor={"nationality"}>Where are you from?</label>
        <div>{flag}</div>
      </div>
      <select
        className={"bg-primary-300 p-2 text-primary-800"}
        id={"nationality"}
        name={"nationality"}
        defaultValue={defaultCountry}
        key={defaultCountry}
      >
        <option value="">Select country...</option>
        {countries.map((c: any) => {
          return (
            <option key={`${c.name.common}`} value={`${c.name.common}`}>
              {c.name.common}
            </option>
          );
        })}
      </select>
    </>
  );
}
