import { getCountries } from "@/app/_lib/actions";
import { TGuest } from "@/app/_lib/types";

type SelectCountryProps = {
  guest: TGuest;
};

async function SelectCountry({ guest }: SelectCountryProps) {
  const countries = await getCountries();
  console.log(countries[0]);

  return (
    <select
      className={"bg-primary-300 p-2 text-primary-800"}
      defaultValue={guest.nationality}
    >
      <option value="">Select country...</option>
      {countries.map((c: any) => (
        <option key={`${c.name.common}`} value={`${c.name.common}`}>
          {c.name.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
