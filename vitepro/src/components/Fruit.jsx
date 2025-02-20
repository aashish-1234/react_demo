import React from "react";

const Fruit = ({name, price, emoji}) => {
  return (
    <li>
      {name} {price} {emoji}
    </li>
  );
};

export default Fruit;
