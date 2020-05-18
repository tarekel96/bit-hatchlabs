// import packages
import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import style
import "./App.scss";

// import pages
import ButtonsLightMode from "../src/pages/buttons-light-mode";
import ButtonsDarkMode from "../src/pages/buttons-dark-mode";

//import { Button } from "../src/components/Button";

function App() {
  return (
    <>
      <ButtonsLightMode />
      <ButtonsDarkMode />
    </>
  );
}

export default App;
