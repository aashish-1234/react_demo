import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  //rendering list
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pir"];
  //rendering array
  const fal = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 20, emoji: "🍌" },
    { name: "orange", price: 30, emoji: "🍊" },
    { name: "pineapple", price: 10, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <ul>
        {fal.map((fals) => (
          <li key={fals.name}>
            {fals.name} {fals.emoji} ${fals.price}{" "}
          </li>
        ))}
      </ul>
       
      <ul>
        {fal.map((fruitt)=>(
          <Fruit 
          key={fruitt.name}
          name={fruitt.name}
          price={fruitt.price}
          emoji={fruitt.emoji}
          />
        ))}
      </ul>
      
    </div>
  );
}

export default Fruits;
