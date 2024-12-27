import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (password.length === 0) return;
    if (password.length < 8) {
      setError("Your password is too short, like my patience.");
      return;
    }
    if (
      !(
        password.includes("😊") ||
        password.includes("🔥") ||
        password.includes("💥")
      )
    ) {
      setError("Add an emoji to bring some life to your password.");
      return;
    }
    setError("");
  }, [password]);

  return (
    <div className="App">
      <input
        type="password"
        className="Input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <p className="Error">{error}</p>
    </div>
  );
}

export default App;
