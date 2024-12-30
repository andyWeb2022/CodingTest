import { useEffect, useState } from "react";
import "./App.css";

interface ButtonT {
  text: string;
  backgroundColor: string;
  disable: boolean;
}
const letters = "0123456789ABCDEF";
function App() {
  const audio = new Audio("button04b.mp3");
  const [buttonList, setButtonList] = useState<ButtonT[]>([]);
  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const generateButtons = (count: number) => {
    const ButtonList: ButtonT[] = [];
    for (let i = 0; i < count; i++) {
      const color = generateRandomColor();
      ButtonList.push({ text: color, backgroundColor: color, disable: false });
    }
    setButtonList(ButtonList);
  };
  const hiddenButton = (index: number) => {
    setButtonList((prev) => {
      const updateList = [...prev];
      updateList[index] = { ...updateList[index], disable: true };
      return updateList;
    });
  };
  useEffect(() => {
    generateButtons(10);
  }, []);

  useEffect(() => {
    const list = buttonList.filter((data) => data.disable === true);

    if (list.length >= 10) {
      alert("Congratulations, you wasted 2 minutes of your life!");
    }
  }, [buttonList]);
  return (
    <div className="App">
      {buttonList.map((data, index) => (
        <div key={index}>
          <button
            className="Button"
            onClick={() => {
              hiddenButton(index);
              audio.play();
            }}
            disabled={data.disable}
            style={{
              backgroundColor: data.backgroundColor,
              opacity: data.disable ? "0" : "100",
            }}
          >
            {data.text}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
