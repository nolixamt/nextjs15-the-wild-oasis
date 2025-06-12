export type TCabin = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};

export type TGuest = {
  id: number;
  fullName: string;
  email: string;
  nationality: string;
  nationalID: string;
  countryFlag: string;
};

export type TBooking = {
  id: number;
  cabinId: number;
  numNights: number;
  numGuests: number;
  totalPrice: number;
};

export type TFilter = "all" | "small" | "medium" | "large";
