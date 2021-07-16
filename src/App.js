import { useRef, useState, useEffect } from "react";
import Display from "./Display";
import PlaceholderIcon from "./images/placeholder.svg";
import FullScreen from "./Buttons/FullScreen";

function App() {
  return (
    <div className="App">
      <h1>Button Components</h1>
      <FullScreen
        text="Full Screen"
        icon={PlaceholderIcon}
        disabled={false}
        target={(ref) => <img src={PlaceholderIcon} ref={ref} />}
      />
    </div>
  );
}

export default App;
