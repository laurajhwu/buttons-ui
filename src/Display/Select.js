import Display from "./BaseDisplay";
import PlaceholderIcon from "../images/placeholder.svg";
import Select from "../Buttons/Select";
import { LinkIcon } from "./styles";
import usePushTag from "./hooks/usePushTag";

const theme = {
  select: {
    //select styling
  },
  button: {
    marginTop: "10px",
    //button styling
  },
  icon: {
    //icon styling
  },
  text: {
    //button text styling
  },
  options: {
    //options styling
    "& option": {
      //individual option styling
    },
  },
  arrow: {
    //dropdown arrow styling
  },
};

const options = [
  { content: "Language", key: "all", value: "select" /* optional */ },
  { content: "English", key: "eng", value: "english" /* optional */ },
  { content: "Chinese", key: "ch", value: "chinese" /* optional */ },
  { content: "French", key: "fr", value: "french" /* optional */ },
];

export default function UploadBtn() {
  const pushTag = usePushTag("select");

  return (
    <Display
      tag="select"
      title={
        <span id="select" onClick={pushTag}>
          <LinkIcon />
          Select Button
        </span>
      }
      description={
        <>
          Select Button that allows full customization, along with the following
          options and methods listed below.
          <br />
          <ul>
            <li>
              <code>onSelect</code>: takes a callback and returns the{" "}
              <code>value</code> property from the selected element as the
              argument.
            </li>
            <br />
            <li>
              <code>hideOnSelect</code>: default value is <code>true</code>.
              Setting the <code>false</code> prevents the selection dropdown
              menu from closing after an option is selected.
            </li>
            <br />
            <li>
              <code>defaultValue</code>: takes the value of an option to be set
              as default.
            </li>
            <br />
            <li>
              <code>options</code>: an array of options to be rendered. Each
              option is an object that contains the <code>content</code>{" "}
              property, which will be rendered on screen; <code>key</code>{" "}
              property, the key for React to render arrays; <code>value</code>{" "}
              property, which is optional, for the <code>&lt;option&gt;</code>{" "}
              <code>value</code> property.
              <br />
              If no <code>value</code> is passed, the default <code>value</code>{" "}
              will be the <code>content</code>.
            </li>
            <br />
            <li>
              Optionally, you can also choose to pass down jsx children within{" "}
              <code>&lt;Select&gt;&lt;/Select&gt;</code>. We recommend passing{" "}
              <code>&lt;option&gt;</code> or any html tag that accepts the{" "}
              <code>value</code> property.
            </li>
          </ul>
          <br />
        </>
      }
      code={() => (
        <code className="language-js">
          {`import {Select} from "react-buttons-ui"
          import PlaceholderIcon from "../images/placeholder.svg";

          //Customized Styles
            const theme = {
              \u00A0select: {
                \u00A0\u00A0//select styles
              \u00A0},
              \u00A0button: {
                \u00A0\u00A0marginTop: "10px",
                \u00A0\u00A0//button styles
              \u00A0},
              \u00A0icon: {
                \u00A0\u00A0//icon styling
              \u00A0},
              \u00A0text: {
                \u00A0\u00A0//button text styling
              \u00A0},
              \u00A0options: {
                \u00A0\u00A0//options styling
                \u00A0\u00A0"& option": {
                  \u00A0\u00A0\u00A0//individual option styling
                \u00A0\u00A0},
              \u00A0},
               \u00A0arrow: {
                 \u00A0 \u00A0//dropdown arrow styling
               \u00A0},
            };
            ...
            const options = [
              \u00A0{ content: "Language", key: "all", value: "select" /* optional */ },
              \u00A0{ content: "English", key: "eng", value: "english" /* optional */ },
              \u00A0{ content: "Chinese", key: "ch", value: "chinese" /* optional */ },
              \u00A0{ content: "French", key: "fr", value: "french" /* optional */ },
            ];
            ...
            //Render Button
            return (
              \u00A0<label className="demo-label" htmlFor="demo1">
                \u00A0\u00A0Default Settings
                \u00A0\u00A0<Select iconStart={PlaceholderIcon} theme={theme} options={options} id="demo1" />
              \u00A0</label>

              \u00A0<label className="demo-label" htmlFor="demo2">
                \u00A0\u00A0No auto hide
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0hideOnSelect={false}
                  \u00A0\u00A0\u00A0id="demo2"
                \u00A0\u00A0/>
              \u00A0</label>

              \u00A0<label className="demo-label" htmlFor="demo3">
                \u00A0\u00A0Set default value
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0defaultValue="chinese"
                  \u00A0\u00A0\u00A0id="demo3"
                \u00A0\u00A0/>
              \u00A0</label>

              \u00A0<label className="demo-label" htmlFor="demo4">
                \u00A0\u00A0Options as children
                \u00A0\u00A0<Select iconStart={PlaceholderIcon} theme={theme} \u00A0\u00A0id="demo4">
                  \u00A0\u00A0\u00A0<option value="customize" key="all">
                    \u00A0\u00A0\u00A0\u00A0Language
                  \u00A0\u00A0\u00A0</option>
                  \u00A0\u00A0\u00A0<option value="english" key="eng">
                    \u00A0\u00A0\u00A0\u00A0English
                  \u00A0\u00A0\u00A0</option>
                  \u00A0\u00A0\u00A0<option value="chinese" key="ch">
                    \u00A0\u00A0\u00A0\u00A0Chinese
                  \u00A0\u00A0\u00A0</option>
                  \u00A0\u00A0\u00A0<option value="french" key="fr">
                    \u00A0\u00A0\u00A0\u00A0French
                  \u00A0\u00A0\u00A0</option>
                \u00A0\u00A0</Select>
              \u00A0</label>

               \u00A0<label className="demo-label" htmlFor="demo5">
                \u00A0\u00A0Disabled
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0disabled={true}
                  \u00A0\u00A0\u00A0id="demo5"
                \u00A0\u00A0/>
              \u00A0</label>
          );`}
        </code>
      )}
    >
      <label className="demo-label" htmlFor="demo1">
        Default Settings
        <Select
          iconStart={PlaceholderIcon}
          theme={theme}
          options={options}
          id="demo1"
        />
      </label>
      <label className="demo-label" htmlFor="demo2">
        No auto hide
        <Select
          iconStart={PlaceholderIcon}
          theme={theme}
          options={options}
          hideOnSelect={false}
          id="demo2"
        />
      </label>
      <label className="demo-label" htmlFor="demo3">
        Set default value
        <Select
          defaultValue="chinese"
          iconStart={PlaceholderIcon}
          theme={theme}
          options={options}
          id="demo3"
        />
      </label>
      <label className="demo-label" htmlFor="demo4">
        Options as children
        <Select iconStart={PlaceholderIcon} theme={theme} id="demo4">
          <option value="customize" key="all">
            Language
          </option>
          <option value="english" key="eng">
            English
          </option>
          <option value="chinese" key="ch">
            Chinese
          </option>
          <option value="french" key="fr">
            French
          </option>
        </Select>
      </label>
      <label className="demo-label" htmlFor="demo5">
        Disabled
        <Select
          iconStart={PlaceholderIcon}
          disabled={true}
          theme={theme}
          options={options}
          id="demo5"
        />
      </label>
    </Display>
  );
}
