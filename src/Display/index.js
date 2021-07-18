import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Fullscreen from "./FullScreen";
import Upload from "./Upload";
import Select from "./Select";
import Next from "./Next";
import IconBtn from "./IconBtn";
import Confirm from "./Confirm";

export default function Display() {
  return (
    <Router>
      <Fullscreen />
      <Upload />
      <Select />
      <Next />
      <IconBtn />
      <Confirm />
    </Router>
  );
}
