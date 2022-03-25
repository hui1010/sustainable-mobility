import React, { useState } from "react";
import { Fuel } from "../type";

export function FuelOptions() {
  const [fuel, setFuel] = useState<Fuel>();
  return (
    <div>
      <label className="initial_form_title">Fuel</label>
      <input
        className="initial_input"
        type="radio"
        name="fuel"
        value="diesel"
        onChange={(e) => setFuel(e.target.value as Fuel)}
        id="Diesel"
      />
      <label htmlFor="Diesel">Diesel</label>
      <input
        className="initial_input"
        type="radio"
        name="fuel"
        value="bensin"
        onChange={(e) => setFuel(e.target.value as Fuel)}
        id="Bensin"
      />
      <label htmlFor="Bensin"> Bensin</label>
      <input
        className="initial_input"
        type="radio"
        name="fuel"
        value="gas"
        id="Gas"
        onChange={(e) => setFuel(e.target.value as Fuel)}
      />
      <label htmlFor="Gas">Gas</label>
      <input
        className="initial_input"
        type="radio"
        name="fuel"
        value="electricity"
        onChange={(e) => setFuel(e.target.value as Fuel)}
        id="Electricity"
      />
      <label htmlFor="Electricity">Electricity</label>
    </div>
  );
}
