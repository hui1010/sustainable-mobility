import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, MouseEvent } from "react";
import { fuelStatistic, FuelType, regions, fuelArr } from "../type.ts";
import { faStar, faWarning } from "@fortawesome/free-solid-svg-icons";
import "react-dropdown/style.css";
import { MyDropDown } from "./MyDropDown.tsx";
import { PersonalInfo, Plan, Process, Town } from "../svg";

export function InitialScreen() {
  const [distance, setDistance] = useState<number>(0);
  const [region, setRegion] = useState("");
  const [fuel, setFuel] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showResult, setShowResult] = useState(false);

  const onShowReult = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!distance && !fuel && !region) {
      setErrorMsg("You need to fill in all fields");
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
      <div className="intro-container">
        <div className="intro-text">
          <h1>Sustainability week 2022</h1>
          <p>
            In this time of the year we in sustainable expert group in IST wants
            to provide you more environment related tips to help you to live a
            more sustainable life. Today our foucs is - traveling.
          </p>
          <p>
            Traveling happens everyday in our life, we travel to work, home,
            restaurants glossery stores, hobby spots, pick up the kids...
          </p>
          <p>
            Are you curious about how much co2 emission that is generated by
            traveling?
          </p>
          <p>
            In today's activity we'd like to provid you some breif information
            of some of the mainstream traveling methods' co2 emission, and a
            little bit of tips to help you to travel more environmental friendly
            in other occasions.
          </p>
          <p>
            We use the distance between your home and work as an exmple this
            time, but if you are curious, you can try any other destinations
          </p>
          <p>Note: the data you enter wll not be saved anywehere by any mean</p>
        </div>
        <div className="intro-image">
          <img src={Town} alt="header" />
        </div>
      </div>
      <div className="initial-container">
        <div className="initial-upper">
          <h3 className="initial-header">Calculate your emission</h3>
          <div className="initial-inputs">
            <div className="input">
              <label>{"How far do you travel (km)*"} </label>
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
              <label>Where do you travel* </label>
              <MyDropDown
                options={regions}
                value={region}
                onChange={setRegion}
                clickable={!showResult}
              />
            </div>

            <div className="input">
              <label>How do you travel* </label>
              <MyDropDown
                options={fuelStatistic.map((f: FuelType) => f.fuel)}
                value={fuel}
                onChange={setFuel}
                clickable={!showResult}
              />
            </div>
          </div>

          {errorMsg && (
            <>
              <p className="error">
                <FontAwesomeIcon icon={faWarning} /> {errorMsg}
              </p>
            </>
          )}
        </div>

        <button className="button initial-button" onClick={onShowReult}>
          {showResult ? "Edit" : "Show my result"}
        </button>
      </div>
      {showResult && (
        <div className="result-container">
          <div className="result-upper">
            <div className="result-image">
              {/* <img src={Plan} alt="header" /> */}
              <img src={PersonalInfo} alt="header" />
              {/* <img src={Process} alt="header" /> */}
            </div>
            <div className="result-text">
              <h2 className="result-text-title">Your results are:</h2>
              <p className="result-content">
                Your daily carbon dioxide emission is:{" "}
                {fuelArr[fuel] * distance * 2} g
              </p>

              {distance * fuelArr[fuel] === 0 ? (
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    size="5x"
                    beatFade
                    color="#ffde00"
                  />
                </div>
              ) : (
                <>
                  <p>That is in eqviallent to xx trees working xx days</p>
                </>
              )}
            </div>
          </div>
          <h1 className="result-tip-header">Do you know that?</h1>
          <div className="tips">
            <div className="tip">
              <p>Car pooling</p>
              <div>
                You can save 50% of carbon emissions per person if there are two
                people in a car.
              </div>
            </div>
            <div className="tip">
              <p>Public transport</p>
              <div>
                You can save 75% of emissions by taking the train instead of the
                car traveling the same distance
              </div>
            </div>
            <div className="tip">
              <p>Fuel</p>
              <div>
                You can save up to 90% of emissions if you drive in an electric
                car compared to a benzin car. It would be 100% if the
                electricity came from renewable energy.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
