import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";
import './main.jsx';
import ''

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = userState("olive");
  return (
    <>
      <h1 className="bg-green-400 text-black p-3 rounded-xl mb-4">
        Telwind test
      </h1>
      <Card username="Aashish developer react component" bottom01="react.js" />
      <Card username="Aashish developer veu js" />

      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}

export default App;
