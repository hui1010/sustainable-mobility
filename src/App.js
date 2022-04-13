import "./App.css";
import { LoginScreen } from "./components/LoginScreen.tsx";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      <div className="footer">
        <p>
          The final interpretation right of this event belongs to IST
          Sustainable Expert Group
        </p>
        <p>
          &#129505;Ackowledge to Richard Lundby for the design
          support&emsp;&emsp;&emsp; &copy; 2022 Huiyi Skårner
        </p>
      </div>
    </div>
  );
}

export default App;
