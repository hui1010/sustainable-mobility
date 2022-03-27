export type Fuel =
  | "bensin"
  | "diesel"
  | "gas"
  | "electricity"
  | "hybrid"
  | "bus"
  | "train"
  | "subway"
  | "bike"
  | "walk";

export type FuelType = { fuel: Fuel; emission: number };

export const fuelStatistic: Array<FuelType> = [
  { fuel: "bensin", emission: 0 },
  { fuel: "diesel", emission: 0 },
  { fuel: "gas", emission: 0 },
  { fuel: "electricity", emission: 0 },
  { fuel: "hybrid", emission: 0 },
  { fuel: "bus", emission: 0 },
  { fuel: "train", emission: 0 },
  { fuel: "subway", emission: 0 },
  { fuel: "bike", emission: 0 },
  { fuel: "walk", emission: 0 },
];
