export type Fuel =
  | "bensin"
  | "diesel"
  | "electricity"
  | "bus"
  | "train"
  | "bike"
  | "walk";

export type FuelType = { fuel: Fuel; emission: number };

export const fuelStatistic: Array<FuelType> = [
  { fuel: "bensin", emission: 181 },
  { fuel: "diesel", emission: 0 },
  { fuel: "electricity", emission: 45 },
  { fuel: "bus", emission: 27 },
  { fuel: "train", emission: 45 },
  { fuel: "bike", emission: 0 },
  { fuel: "walk", emission: 0 },
];

interface FuelArrType {
  [index: string]: number;
}

export const fuelArr: FuelArrType = {
  bensin: 181,
  diesel: 0,
  electricity: 45,
  bus: 27,
  train: 45,
  bike: 0,
  walk: 0,
};

export const regions = ["Sweden", "Denmark", "Norway", "Germany"];

type RegionType = "Sweden" | "Denmark" | "Norway" | "Germany";

export const getEmission = (region: RegionType): FuelArrType => {
  switch (region) {
    case "Sweden":
      return {
        bensin: 181,
        diesel: 119,
        electricity: 14,
        bus: 27,
        train: 10,
        bike: 0,
        walk: 0,
      };
    case "Denmark":
      return {
        bensin: 181,
        diesel: 119,
        electricity: 45,
        bus: 27,
        train: 58,
        bike: 0,
        walk: 0,
      };
    case "Norway":
      return {
        bensin: 181,
        diesel: 119,
        electricity: 14,
        bus: 27,
        train: 10,
        bike: 0,
        walk: 0,
      };
    case "Germany":
      return {
        bensin: 181,
        diesel: 119,
        electricity: 45,
        bus: 27,
        train: 45,
        bike: 0,
        walk: 0,
      };
    default:
      return {
        bensin: 181,
        diesel: 0,
        electricity: 45,
        bus: 27,
        train: 45,
        bike: 0,
        walk: 0,
      };
  }
};
