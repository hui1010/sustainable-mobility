export type RegionType = "Sweden" | "Denmark" | "Norway" | "Germany";
export type FuelType =
  | "Petrol"
  | "Diesel"
  | "Electricity"
  | "Bus"
  | "Train"
  | "Bike"
  | "Walk";

interface FuelArrType {
  [index: string]: number;
}

export const regions = ["Sweden", "Denmark", "Norway", "Germany"];
export const fuels = [
  "Petrol",
  "Diesel",
  "Electricity",
  "Bus",
  "Train",
  "Bike",
  "Walk",
];

export const getEmission = (region: RegionType): FuelArrType => {
  switch (region) {
    case "Sweden":
      return {
        Petrol: 181,
        Diesel: 119,
        Electricity: 14,
        Bus: 27,
        Train: 10,
        Bike: 0,
        Walk: 0,
      };
    case "Denmark":
      return {
        Petrol: 181,
        Diesel: 119,
        Electricity: 45,
        Bus: 27,
        Train: 58,
        Bike: 0,
        Walk: 0,
      };
    case "Norway":
      return {
        Petrol: 181,
        Diesel: 119,
        Electricity: 14,
        Bus: 27,
        Train: 10,
        Bike: 0,
        Walk: 0,
      };
    case "Germany":
      return {
        Petrol: 181,
        Diesel: 119,
        Electricity: 45,
        Bus: 27,
        Train: 45,
        Bike: 0,
        Walk: 0,
      };
    default:
      return {
        Petrol: 181,
        Diesel: 0,
        Electricity: 45,
        Bus: 27,
        Train: 45,
        Bike: 0,
        Walk: 0,
      };
  }
};
