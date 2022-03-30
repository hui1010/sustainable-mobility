import "./App.css";
import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen.tsx";
import { Intro } from "./components/Intro.tsx";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      <h1>
        {new Date().getHours() <= 12
          ? "Good morning"
          : new Date().getHours() <= 18
          ? "Good afternoon"
          : "Good evening"}
        &nbsp;and happy Earth Week!
      </h1>
      {showIntro ? (
        <Intro onHide={setShowIntro} />
      ) : (
        <>
          <div className="intro_blank">
            <button
              className="button intro_button"
              onClick={(e) => {
                e.preventDefault();
                setShowIntro(true);
              }}
            >
              Show Intro
            </button>
          </div>
        </>
      )}
      <LoginScreen />
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
