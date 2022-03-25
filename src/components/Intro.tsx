import React, { Dispatch, SetStateAction } from "react";

interface Props {
  onHide: Dispatch<SetStateAction<boolean>>;
}

export function Intro(props: Props) {
  return (
    <div className="intro_container">
      <p>The theme of Earth Week and its meaning to IST</p>
      <p>The need of decreasing CO2</p>
      <p>Rule of this activity:</p>

      <button
        className="button intro_button"
        onClick={() => props.onHide(false)}
      >
        OK, I see
      </button>
    </div>
  );
}