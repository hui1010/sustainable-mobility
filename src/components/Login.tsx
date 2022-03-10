import React from "react";

export function Login() {
  return (
    <div className="login_container">
      <form>
        <div>
          <label className="login_form_title">Distance</label>
          <input className="login_input" type="text" />
        </div>
        <div>
          <label className="login_form_title">Fuel</label>
          <input
            className="login_input"
            type="radio"
            name="fuel"
            value="Diesel"
            id="Diesel"
          />
          <label htmlFor="Diesel">Diesel</label>
          <input
            className="login_input"
            type="radio"
            name="fuel"
            value="Bensin"
            id="Bensin"
          />
          <label htmlFor="Bensin"> Bensin</label>

          <input
            className="login_input"
            type="radio"
            name="fuel"
            value="Gas"
            id="Gas"
          />
          <label htmlFor="Gas">Gas</label>

          <input
            className="login_input"
            type="radio"
            name="fuel"
            value="Electricity"
            id="Electricity"
          />
          <label htmlFor="Electricity">Electricity</label>
        </div>
        <button
          className="button login_button"
          onClick={() => console.log("calling database")}
        >
          Save
        </button>
      </form>
    </div>
  );
}
