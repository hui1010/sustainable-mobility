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
        <p>&copy; 2022 Huiyi Skårner</p>
      </div>
    </div>
  );
}

export default App;
