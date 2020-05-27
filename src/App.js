// import packages
import React from "react";
import { InfoIcon, SharePoint } from "./components/Icon/icons";
import VIEWBOX from "./components/Icon/viewbox";

// import style
//import "./App.scss";

// import pages
// import ButtonsLightMode from "../src/pages/buttons-light-mode";
// import ButtonsDarkMode from "../src/pages/buttons-dark-mode";
import Icon from "./components/Icon/index";

function App() {
  return (
    <>
      <Icon color="red" size="large">
        <InfoIcon />
      </Icon>
      <Icon color="green">
        <SharePoint />
      </Icon>
      <Icon color="green" size="large" bgcolor="purple">
        <SharePoint />
      </Icon>
    </>
  );
}

export default App;
