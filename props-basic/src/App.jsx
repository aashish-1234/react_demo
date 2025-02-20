import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello name="manish gendupur">
        <p>hello manish what is your name</p>
      </Hello>
      <Hello name="kausik chotal"  age="19"/>
      <Hello/>
      <button>hello</button>
    </>
  );
}

export default App;
