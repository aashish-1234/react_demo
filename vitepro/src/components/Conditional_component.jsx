import React from "react";
import Code from "./Code";
import Welcome from "./welcome";
const Conditional_component = () => {
  const display = true;
  if (display) {
    return <Code />;
  } else {
    return <Welcome />;
  }
};

export default Conditional_component;
