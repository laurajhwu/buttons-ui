import React from "react";
import Fullscreen from "./FullScreen";
import Upload from "./Upload";
import Select from "./Select";

export default function Display(props) {
  return (
    <>
      <Fullscreen />
      <Upload />
      <Select />
    </>
  );
}
