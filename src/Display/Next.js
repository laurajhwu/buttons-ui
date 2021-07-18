import Display from "./BaseDisplay";
import Next from "../Buttons/Next";
import { LinkIcon } from "./styles";
import usePushTag from "./hooks/usePushTag";

const theme = {
  button: {
    marginTop: "10px",
    //button styles
  },
  arrow: {
    //arrow styling
  },
  icon: {
    //icon styling
  },
  text: {
    //text styling
  },
};

export default function NextBtn() {
  const pushTag = usePushTag("next");

  return (
    <Display
      tag="next"
      title={
        <span id="next" onClick={pushTag}>
          <LinkIcon />
          Next Button
        </span>
      }
      description={
        <>
          Simple next button with styled effects.
          <br />
        </>
      }
      code={() => (
        <code className="language-js">
          {`import {Next} from "react-buttons-ui"
         
          //Customized Styles
            const theme = {
              \u00A0button: {
                \u00A0\u00A0marginTop: "10px",
                \u00A0\u00A0//button styles
              \u00A0},
               \u00A0arrow: {
                 \u00A0 \u00A0//arrow styling
               \u00A0},
              \u00A0icon: {
                \u00A0\u00A0//icon styling
              \u00A0},
              \u00A0text: {
                \u00A0\u00A0//text styling
              \u00A0},
            };
            ...
            //Render Button
            return (
           \u00A0<Next
            \u00A0\u00A0text="Next"
            \u00A0\u00A0theme={theme}
            \u00A0\u00A0disabled={false}
            \u00A0\u00A0onClick={(event) => {//do something}}
            \u00A0/>
          );`}
        </code>
      )}
    >
      <label className="demo-label">
        Default
        <Next text="Next" theme={theme} />
      </label>
      <label className="demo-label">
        Disabled
        <Next text="Next" disabled={true} theme={theme} />
      </label>
    </Display>
  );
}
