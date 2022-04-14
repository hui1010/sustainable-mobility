export type RegionType = "Sweden" | "Denmark" | "Norway" | "Germany";
export type FuelType =
  | "Bensin"
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
  "Bensin",
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
        Bensin: 181,
        Diesel: 119,
        Electricity: 14,
        Bus: 27,
        Train: 10,
        Bike: 0,
        Walk: 0,
      };
    case "Denmark":
      return {
        Bensin: 181,
        Diesel: 119,
        Electricity: 45,
        Bus: 27,
        Train: 58,
        Bike: 0,
        Walk: 0,
      };
    case "Norway":
      return {
        Bensin: 181,
        Diesel: 119,
        Electricity: 14,
        Bus: 27,
        Train: 10,
        Bike: 0,
        Walk: 0,
      };
    case "Germany":
      return {
        Bensin: 181,
        Diesel: 119,
        Electricity: 45,
        Bus: 27,
        Train: 45,
        Bike: 0,
        Walk: 0,
      };
    default:
      return {
        Bensin: 181,
        Diesel: 0,
        Electricity: 45,
        Bus: 27,
        Train: 45,
        Bike: 0,
        Walk: 0,
      };
  }
};
