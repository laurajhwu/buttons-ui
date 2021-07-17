import React from "react";
import Fullscreen from "./FullScreen";
import Upload from "./Upload";
import Select from "./Select";
import Next from "./Next";

export default function Display(props) {
  return (
    <>
      <Fullscreen />
      <Upload />
      <Select />
      <Next />
    </>
  );
}
