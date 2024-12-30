import { useState } from "react";
import "./App.css";

function App() {
  const moodList = ["😃", "😢", "😡", "😴"];
  const [emoji, setEmoji] = useState<string>("");

  return (
    <div className="App">
      <p className="Text">{emoji}</p>
      <div className="Div">
        {moodList.map((data, index) => (
          <button
            key={index}
            onClick={() => {
              if (emoji === data && emoji === "😡") {
                alert("Whoa, calm down! Want some coffee?");
              }
              setEmoji(data);
            }}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
