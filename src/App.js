// import packages
import React from "react";

// import style
import "./App.scss";

// import pages
import Buttons from "../src/pages/buttons-light-mode";

import { Button } from "../src/components/Button";

function App() {
  return (
    <>
      <Button content="Default" />
      <Buttons />
    </>
  );
}

export default App;
