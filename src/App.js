import "./App.css";
import { useState, useEffect } from "react";
import { Login } from "./components/Login.tsx";
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
          : "Good evening"}{" "}
        huiyi
      </h1>
      {showIntro && <Intro onHide={setShowIntro} />}
      <Login />
    </div>
  );
}

export default App;
