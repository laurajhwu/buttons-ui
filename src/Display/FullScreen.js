import Display from "./BaseDisplay";
import PlaceholderIcon from "../images/placeholder.svg";
import CoffeeImg from "../images/coffee.jpg";
import FullScreen from "../Buttons/FullScreen";
import { Indent } from "./styles";
import outdent from "outdent";

const theme = {
  button: {
    marginTop: "10px",
    //button styles
  },
  icon: {
    //icon styling
  },
  text: {
    //text styling
  },
  target: {
    //target styling
  },
};

const text = `
  const theme = {
    button: {
    marginTop: "10px",
    //button styles
  },
  icon: {
    //icon styling
  },
  text: {
    //text styling
  },
  target: {
    //target styling
  },
};
`;

export default function Fullscreen() {
  return (
    <Display
      title="Full Screen Button"
      description={
        <>
          Full Screen Button containing a <code>target</code> property that
          takes a callback to reference target element.
        </>
      }
      code={() => (
        <code className="language-js">
          {`
            //Customize Styles
            const theme = {
              \u00A0button: {
                \u00A0\u00A0marginTop: "10px",
                \u00A0\u00A0//button styles
              \u00A0},
              \u00A0icon: {
                \u00A0\u00A0//icon styling
              \u00A0},
              \u00A0text: {
                \u00A0\u00A0//text styling
              \u00A0},
              \u00A0target: {
               \u00A0\u00A0//target styling
              \u00A0},
            };
            ...
            //Render Button
            return (
           \u00A0<FullScreen
            \u00A0\u00A0text="Full Screen"
            \u00A0\u00A0icon={PlaceholderIcon}
            \u00A0\u00A0theme={theme}
            \u00A0\u00A0target={(ref) =>
             \u00A0\u00A0\u00A0(<img src={CoffeeImg} ref={ref} className="demo-image" />)
            \u00A0\u00A0\u00A0}
            \u00A0/>
          );`}
        </code>
      )}
    >
      <label className="demo-label">
        Default
        <FullScreen
          text="Full Screen"
          icon={PlaceholderIcon}
          theme={theme}
          target={(ref) => (
            <img src={CoffeeImg} ref={ref} className="demo-image" />
          )}
        />
      </label>
      <label className="demo-label">
        Disabled
        <FullScreen
          text="Full Screen"
          icon={PlaceholderIcon}
          disabled={true}
          theme={theme}
          target={(ref) => (
            <img src={CoffeeImg} ref={ref} className="demo-image" />
          )}
        />
      </label>
      <label className="demo-label">
        No Icon
        <FullScreen
          text="Full Screen"
          disabled={false}
          theme={theme}
          target={(ref) => (
            <img src={CoffeeImg} ref={ref} className="demo-image" />
          )}
        />
      </label>
    </Display>
  );
}
