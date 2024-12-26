import { useState } from "react";
import "./App.css";

function App() {
  const ingredientList = ["bread", "lettuce", "tomato", "cheese", "bacon"];
  const [food, setFood] = useState<string[]>([]);
  const addIngredients = () => {
    const baconCount = food.filter((data) => data === "bacon");
    if (baconCount.length < 5) {
      const random = Math.floor(Math.random() * 5);
      setFood((prev) => [...prev, ingredientList[random]]);
    } else {
      const random = Math.floor(Math.random() * 4);
      setFood((prev) => [...prev, ingredientList[random]]);
    }
  };
  return (
    <div className="App">
      <div className="Food-div">
        {food.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
      <div className="Btn-div">
        <button onClick={addIngredients}>Add ingredient</button>
        <button
          onClick={() => {
            const sauceExists = food.some((food) => food === "pickles");
            if (sauceExists) {
              alert("You can't put peanut butter and pickles together");
              return;
            }
            setFood((prev) => [...prev, "peanut butter"]);
          }}
        >
          Add peanut butter
        </button>
        <button
          onClick={() => {
            const sauceExists = food.some((food) => food === "peanut butter");
            if (sauceExists) {
              alert("You can't put peanut butter and pickles together");
              return;
            }
            setFood((prev) => [...prev, "pickles"]);
          }}
        >
          Add pickles
        </button>
        <button
          onClick={() => {
            setFood([]);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
