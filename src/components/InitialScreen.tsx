import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SetStateAction, useState, MouseEvent } from "react";
import { fuelStatistic, FuelType } from "../type.ts";
import { ResultScreen } from "./ResultScreen.tsx";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Props {
  showLogin: React.Dispatch<SetStateAction<boolean>>;
}

export function InitialScreen(props: Props) {
  const [distance, setDistance] = useState<number>(0);
  const [fuel, setFuel] = useState<FuelType>();
  const [errorMsg, setErrorMsg] = useState("");
  const [showResult, setShowResult] = useState(false);

  const onShowReult = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!distance && !fuel) {
      setErrorMsg("You need to fill in the Distance and choose a fuel type");
      return;
    }
    if (!distance) {
      setErrorMsg("Don't forget to fill in Distance");
      return;
    }
    if (!fuel) {
      setErrorMsg("Don't forget to choose fuel");
      return;
    }
    setErrorMsg("");
    setShowResult(!showResult);
  };

  return (
    <div>
      {/* <h2>First we need to collect some basic information</h2> */}
      <div className="initial_container">
        <div>
          <label>{"Travel distance (km)*"} </label>
          <input
            className="initial_input"
            type="number"
            value={distance === 0 ? "" : distance}
            // TODO: remove the placeholder 0
            onChange={(e) => {
              setDistance(Number(e.target.value));
            }}
            readOnly={showResult}
          />
        </div>

        <div>
          <label>Travel method*</label> <br />
          {fuelStatistic.map((f: FuelType) => (
            <span key={f.fuel}>
              <input
                value={f.fuel}
                type="radio"
                name="fuel"
                onChange={() => setFuel(f)}
                disabled={showResult}
              />
              <label>
                {f.fuel}
                {"   "}
              </label>
            </span>
          ))}
        </div>
        <p className="error">{errorMsg}</p>
        <button className="button initial_button" onClick={onShowReult}>
          {showResult ? "Edit" : "Show my result"}
        </button>
      </div>
      {showResult && (
        <>
          <h3 className="result_title">
            Your daily carbon dioxide emission is: {fuel.emission * distance} g
          </h3>

          {distance * fuel.emission === 0 ? (
            <div>
              <h3>Wow, you are an environment hero!</h3>
              <FontAwesomeIcon
                icon={faStar}
                size="5x"
                beatFade
                color="#ffdf00"
              />
              <p>
                Keep on your good work! However, we have some info for you if
                you wonder what the other fuels co2 emission is
              </p>
            </div>
          ) : (
            <div>
              <p>That is in eqviallent to xx trees working xx days</p>
              <p>Do you know that?</p>

              <p>
                {" "}
                If you drive an electricity car, you would decrease your daily
                emission by xx%{" "}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
