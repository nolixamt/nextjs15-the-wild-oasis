import React from "react";
import H2 from "@/app/_components/h2";
import UpdateProfileForm from "@/app/_components/update-profile-form";
import SelectCountry from "@/app/_components/select-country";
import { getGuestById } from "@/app/_lib/actions";

export default async function Page() {
  const guest = await getGuestById(1);

  return (
    <div>
      <H2>Update your guest profile</H2>
      <p className={"mb-6"}>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry guest={guest} />
      </UpdateProfileForm>
    </div>
  );
}
