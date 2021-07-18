import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Fullscreen from "./FullScreen";
import Upload from "./Upload";
import Select from "./Select";
import Next from "./Next";
import IconBtn from "./IconBtn";
import Confirm from "./Confirm";

const linkStyle = {
  textDecoration: "none",
  color: "unset",
  cursor: "unset",
  "&:focus, &:hover, &:visited, &:link, &:active": {
    textDecoration: "none",
    color: "unset",
    cursor: "unset",
  },
};

export default function Display() {
  return (
    <Router>
      <Link path="/#fullscreen" style={linkStyle}>
        <Fullscreen />
      </Link>
      <Link path="/#upload" style={linkStyle}>
        <Upload />
      </Link>
      <Link path="/#select" style={linkStyle}>
        <Select />
      </Link>
      <Link path="/#next" style={linkStyle}>
        <Next />
      </Link>
      <Link path="/#iconbtn" style={linkStyle}>
        <IconBtn />
      </Link>
      <Link path="/#confirm" style={linkStyle}>
        <Confirm />
      </Link>
    </Router>
  );
}
