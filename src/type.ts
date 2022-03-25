export type Fuel =
  | "bensin"
  | "diesel"
  | "gas"
  | "electricity"
  | "hybrid"
  | "bus"
  | "bike"
  | "walk";

export interface PersonInfo {
  name: string;
  distance: number;
  oldFuel: Fuel;
  reduction: [number];
}

export const fakeDb: Array<PersonInfo> = [];
