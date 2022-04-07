import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SetStateAction, useState, MouseEvent } from "react";
import { fuelStatistic, FuelType, regions } from "../type.ts";
import { ResultScreen } from "./ResultScreen.tsx";
import { faStar, faWarning } from "@fortawesome/free-solid-svg-icons";

interface Props {
  showLogin: React.Dispatch<SetStateAction<boolean>>;
}

export function InitialScreen(props: Props) {
  const [distance, setDistance] = useState<number>(0);
  const [region, setRegion] = useState("");
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
    if (distance < 0) {
      setErrorMsg("Distance can't be negative");
      return;
    }
    setErrorMsg("");
    setShowResult(!showResult);
  };

  return (
    <>
      <div className="initial_container">
        <div className="input">
          <label>{"Travel distance (km)*"} </label>
          <input
            type="number"
            value={distance === 0 ? "" : distance}
            onChange={(e) => {
              setDistance(Number(e.target.value));
            }}
            readOnly={showResult}
          />
        </div>

        <div className="input">
          <label>Region* </label>
          {regions.map((r) => (
            <span key={r}>
              <input
                type="radio"
                name="region"
                value={region}
                onChange={() => setRegion(r)}
              />
              <span>{r} </span>
            </span>
          ))}
        </div>

        <div className="input">
          <label>Travel method* </label>
          {fuelStatistic.map((f: FuelType) => (
            <span key={f.fuel}>
              <input
                value={f.fuel}
                type="radio"
                name="fuel"
                onChange={() => setFuel(f)}
                disabled={showResult}
              />
              <span>
                {f.fuel}
                {"   "}
              </span>
            </span>
          ))}
        </div>

        {errorMsg && (
          <>
            {" "}
            <p className="error">
              <FontAwesomeIcon icon={faWarning} /> {errorMsg}
            </p>
          </>
        )}
        <button className="button initial_button" onClick={onShowReult}>
          {showResult ? "Edit" : "Show my result"}
        </button>
      </div>
      {showResult && (
        <>
          <h3 className="result_title">
            Your daily carbon dioxide emission is:{" "}
            {fuel.emission * distance * 2} g
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
            <>
              <p>That is in eqviallent to xx trees working xx days</p>
              <p>Do you know that?</p>
            </>
          )}
          <div className="tips">
            <div className="tip">
              <div>
                <div>Car pooling</div>
                <div>
                  You can save 50% of carbon emissions per person if there are
                  two people in a car.
                </div>
              </div>
            </div>
            <div className="tip">
              <div>
                <div>Public transport</div>
                <div>
                  You can save 75% of emissions by taking the train instead of
                  the car traveling the same distance
                </div>
              </div>
            </div>
            <div className="tip">
              <div>
                <div>Fuel</div>
                <div>
                  You can save up to 90% of emissions if you drive in an
                  electric car compared to a benzin car. It would be 100% if the
                  electricity came from renewable energy.
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
