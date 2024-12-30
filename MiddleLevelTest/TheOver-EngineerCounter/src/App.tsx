import { useEffect, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function App() {
  const [count, setCount] = useState<number>(0);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const increaseNumber = () => {
    setCount(count + 1);
  };
  const decreaseNumber = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    if (transcript.includes("up")) {
      increaseNumber();
    }
    if (transcript.includes("down")) {
      decreaseNumber();
    }
  }, [listening]);
  let array: boolean[] = [];
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.repeat) return;
    if (array.length === 0 && e.code === "ArrowUp") {
      array.push(true);
      return;
    }
    if (array.length === 1 && e.code === "ArrowUp") {
      array.push(true);
      return;
    }
    if (array.length === 2 && e.code === "ArrowDown") {
      array.push(true);
      return;
    }
    if (array.length === 3 && e.code === "ArrowDown") {
      array.push(true);
      return;
    }
    if (array.length === 4 && e.code === "ArrowLeft") {
      array.push(true);
      return;
    }
    if (array.length === 5 && e.code === "ArrowRight") {
      array.push(true);
      return;
    }
    if (array.length === 6 && e.code === "ArrowLeft") {
      array.push(true);
      return;
    }
    if (array.length === 7 && e.code === "ArrowRight") {
      array.push(true);
      return;
    }
    if (array.length === 8 && e.code === "KeyA") {
      array.push(true);
      return;
    }
    if (array.length === 9 && e.code === "KeyB") {
      setCount(1337);
      alert("You win at life");
    }
    array = [];
  };
  return (
    <div className="App" onKeyDown={handleKeyDown}>
      <p>{count}</p>
      <button onClick={decreaseNumber}>decrease</button>
      <button onClick={increaseNumber}>increase</button>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => {
          SpeechRecognition.startListening();
        }}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      密技
      <input type="text" />
    </div>
  );
}

export default App;
