import React from "react";
import Fullscreen from "./FullScreen";
import Upload from "./Upload";
import Select from "./Select";
import Next from "./Next";
import IconBtn from "./IconBtn";
import Confirm from "./Confirm";

export default function Display(props) {
  return (
    <>
      <Fullscreen />
      <Upload />
      <Select />
      <Next />
      <IconBtn />
      <Confirm />
    </>
  );
}
