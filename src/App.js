import "./App.css";
import { useState, useEffect } from "react";
import { InitialScreen } from "./components/InitialScreen.tsx";
import { LoginScreen } from "./components/LoginScreen.tsx";
import { Intro } from "./components/Intro.tsx";
import { ResultScreen } from "./components/ResultScreen.tsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      <h1>
        {new Date().getHours() <= 12
          ? "Good morning"
          : new Date().getHours() <= 18
          ? "Good afternoon"
          : "Good evening"}{" "}
      </h1>
      {showIntro && <Intro onHide={setShowIntro} />}
      {showLogin && (
        <>
          <LoginScreen /> <InitialScreen showLogin={setShowLogin} />
        </>
      )}
      {!showLogin && <ResultScreen />}
      <div className="footer">
        <p>
          The final interpretation right of this event belongs to IST
          Sustainable Expert Group
        </p>
        <p>&copy; 2022 Huiyi Skårner</p>
      </div>
    </div>
  );
}

export default App;
