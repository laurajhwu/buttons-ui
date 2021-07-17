import Display from "./BaseDisplay";
import PlaceholderIcon from "../images/placeholder.svg";
import Select from "../Buttons/Select";

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
  return (
    <Display
      title="Select Button"
      description={
        <>
          Select Button that allows full customization, along with the following
          options and methods listed below.
          <br />
          <ul>
            <li>
              <code>onSelect</code>: takes a callback and returns the{" "}
              <code>value</code> property from the selected option as an
              argument.
            </li>
            <br />
            <li>
              <code>hideOnSelect</code>: default value is <code>true</code>.
              Setting the <code>false</code> prevents the selection dropdown
              menu from closing after an option is selected. (must click button
              to close)
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
              property, which is optional, for the html <code>value</code>{" "}
              property in html <code>option</code>.
              <br />
              If no <code>value</code> property is passed, the default{" "}
              <code>value</code> will be the <code>content</code>.
            </li>
          </ul>
          <br />
        </>
      }
      code={() => (
        <code className="language-js">
          {`//Customized Styles
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
              \u00A0<label className="demo-label">
                \u00A0\u00A0Default Settings
                \u00A0\u00A0<Select iconStart={PlaceholderIcon} theme={theme} options={options} />
              \u00A0</label>

              \u00A0<label className="demo-label">
                \u00A0\u00A0No auto hide
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0hideOnSelect={false}
                \u00A0\u00A0/>
              \u00A0</label>

              \u00A0<label className="demo-label">
                \u00A0\u00A0Set default value
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0defaultValue="chinese"
                \u00A0\u00A0/>
              \u00A0</label>

               \u00A0<label className="demo-label">
                \u00A0\u00A0Disabled
                \u00A0\u00A0<Select
                  \u00A0\u00A0\u00A0iconStart={PlaceholderIcon}
                  \u00A0\u00A0\u00A0theme={theme}
                  \u00A0\u00A0\u00A0options={options}
                  \u00A0\u00A0\u00A0disabled={true}
                \u00A0\u00A0/>
              \u00A0</label>
          );`}
        </code>
      )}
    >
      <label className="demo-label">
        Default Settings
        <Select iconStart={PlaceholderIcon} theme={theme} options={options} />
      </label>
      <label className="demo-label">
        No auto hide
        <Select
          iconStart={PlaceholderIcon}
          theme={theme}
          options={options}
          hideOnSelect={false}
        />
      </label>
      <label className="demo-label">
        Set default value
        <Select
          defaultValue="chinese"
          iconStart={PlaceholderIcon}
          theme={theme}
          options={options}
        />
      </label>
      <label className="demo-label">
        Disabled
        <Select
          iconStart={PlaceholderIcon}
          disabled={true}
          theme={theme}
          options={options}
        />
      </label>
    </Display>
  );
}
