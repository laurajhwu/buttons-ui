import { useState } from "react";
import Display from "./BaseDisplay";
import PlaceholderIcon from "../images/placeholder.svg";
import Select from "../Buttons/Select";
import { File } from "./styles";

const theme = {
  button: {
    marginTop: "10px",
    //button styles
  },
  label: {
    //label styling
  },
  icon: {
    //icon styling
  },
  text: {
    //text styling
  },
  options: {
    //options styling
    "& option": {
      //individual option styling
    },
  },
};

const options = [
  { content: "English", key: "eng", value: "english" /* optional */ },
  { content: "Chinese", key: "ch", value: "chinese" /* optional */ },
  { content: "French", key: "fr", value: "french" /* optional */ },
];

export default function UploadBtn() {
  const [fileName, setFileName] = useState("");

  function handleOnChange(file) {
    setFileName(file.name);
  }
  return (
    <Display
      title="Upload Button"
      description={
        <>
          Upload Button constructed from html <code>&lt;input&gt;</code> tag
          that accepts all or some file types - please refer{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers">
            here
          </a>{" "}
          for customization.
          <br />
          <ul>
            <li>
              <code>onChange</code>: returns <code>event.target.files[0]</code>{" "}
              as an argument, if no file is found, then the function throws an
              error and does not execute.
            </li>
            <br />
            <li>
              <code>icon</code>, <code>text</code>, and <code>input</code>{" "}
              elements are wrapped within a <code>&lt;label&gt;</code> tag.{" "}
              <code>input</code> display is set to <code>none</code> for styling
              purposes.
            </li>
            <br />
            <li>
              <code>input</code> id is combined with a randomly generated unique
              identifier for labeling precision.
            </li>
          </ul>
          <br />
        </>
      }
      code={() => (
        <code className="language-js">
          {`//Customized Styles
            const theme = {
              \u00A0button: {
                \u00A0\u00A0marginTop: "10px",
                \u00A0\u00A0//button styles
              \u00A0},
               \u00A0label: {
                 \u00A0 \u00A0//label styling
               \u00A0},
              \u00A0icon: {
                \u00A0\u00A0//icon styling
              \u00A0},
              \u00A0text: {
                \u00A0\u00A0//text styling
              \u00A0},
            };
            ...
            const [fileName, setFileName] = useState("");

            function handleOnChange(file) {
            \u00A0//file === event.target.files[0]
            \u00A0setFileName(file.name);
            }
            ...
            //Render Button
            return (
           \u00A0<Upload
            \u00A0\u00A0text="Upload"
            \u00A0\u00A0iconEnd={PlaceholderIcon}
            \u00A0\u00A0theme={theme}
            \u00A0\u00A0accept="image/*"
            \u00A0\u00A0onChange={handleOnChange}
            \u00A0/>
          );`}
        </code>
      )}
    >
      <File>
        File Name: <div>{fileName}</div>
      </File>
      <label className="demo-label">
        Default
        <Select
          text="Language"
          iconStart={PlaceholderIcon}
          theme={theme}
          onChange={handleOnChange}
          options={options}
        />
      </label>
      <label className="demo-label">
        Disabled
        <Select
          text="Language"
          iconStart={PlaceholderIcon}
          disabled={true}
          theme={theme}
          options={options}
        />
      </label>
    </Display>
  );
}
