export const sortCountries = (countries: any) => {
  return countries.sort((a: any, b: any) =>
    a.name.common.localeCompare(b.name.common),
  );
};
