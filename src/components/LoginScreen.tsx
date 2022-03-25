import React from "react";

export function LoginScreen() {
  return (
    <div className="login_container">
      <h3 className="login_title">Eneter your name</h3>
      <input className="login_input" type="text" />
      <button
        className="login_button button"
        onClick={(e) => {
          e.preventDefault();
          console.log("ok");
        }}
      >
        Ok
      </button>
    </div>
  );
}
