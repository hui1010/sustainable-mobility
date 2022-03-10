import React, { Dispatch, SetStateAction } from "react";

interface Props {
  onHide: Dispatch<SetStateAction<boolean>>;
}

export function Intro(props: Props) {
  return (
    <div className="intro_container">
      Intro intro Don't show me the warning anymore thank you
      <button
        className="button intro_button"
        onClick={() => props.onHide(false)}
      >
        OK, I see
      </button>
    </div>
  );
}
