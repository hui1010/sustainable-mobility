import React, { useState } from "react";
import { InitialScreen } from "./InitialScreen.tsx";
import { ResultScreen } from "./ResultScreen.tsx";

export function LoginScreen() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login_container">
      <InitialScreen showLogin={setShowLogin} />

      {/* {!showLogin && <ResultScreen />} */}
    </div>
  );
}
