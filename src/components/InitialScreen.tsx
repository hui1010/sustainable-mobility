import React, { SetStateAction, useState } from "react";
import { FuelOptions } from "./FuelOptions.tsx";
interface Props {
  showLogin: React.Dispatch<SetStateAction<boolean>>;
}

export function InitialScreen(props: Props) {
  const [distance, setDistance] = useState<number>();

  return (
    <div className="initial_container">
      <form>
        <div>
          <label className="initial_form_title">Distance</label>
          <input
            className="initial_input"
            type="number"
            value={distance}
            // TODO: Check input type
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </div>
        <div>
          <FuelOptions></FuelOptions>
        </div>
        <button
          className="button initial_button"
          onClick={(e) => {
            e.preventDefault();
            props.showLogin(false);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
