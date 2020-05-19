// import packages
import React from "react";

// import style
import "./App.scss";

// import pages
import ButtonsLightMode from "../src/pages/buttons-light-mode";
import ButtonsDarkMode from "../src/pages/buttons-dark-mode";

function App() {
  return (
    <>
      <h1>ADD TRANSITION TO ARROW</h1>
      {/* <Button>Hello World</Button> */}
      <ButtonsLightMode />
      <ButtonsDarkMode />
    </>
  );
}

export default App;
