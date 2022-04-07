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

export const fuelArr: Array<Record<string, number>> = [
  { bensin: 181 },
  { diesel: 0 },
  { electricity: 45 },
  { bus: 27 },
  { train: 45 },
  { bike: 0 },
  { walk: 0 },
];

export const regions = ["Sweden", "Denmark", "Norway", "Germany"];
