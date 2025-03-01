import { useState } from "react";
import Gello from "./components/Gello";
import Fruits from "./components/Fruits";
import Conditional_component from "./components/Conditional_component";
import Ternary from "./components/Ternary";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  const person = {
    name: "aashish",
    roll_no: 56,
    add: "Gaya",
    phone: 45678912365,
    seatNumber: [1, 2, 5, 6],
  };
  const person2 = {
    name: "Rishav",
    roll_no: 556,
    add: "Gaya",
    phone: 45678912365,
    seatNumber: [1, 6, 6],
  };
  return (
    <>
      <Gello person={person}></Gello>
      <Gello person={person2}></Gello>
      <hr></hr>
      <Fruits></Fruits>
      <Conditional_component></Conditional_component>
      <Ternary />
      <Message />
      <Counter />
    </>
  );
}

export default App;
