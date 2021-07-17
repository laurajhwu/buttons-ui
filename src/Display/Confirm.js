import Display from "./BaseDisplay";
import Confirm from "../Buttons/Confirm";

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
  return (
    <Display
      title="Next Button"
      description={
        <>
          Simple next button with styled effects.
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
        Size small
        <Confirm text="Confirm" theme={theme} size="small" />
      </label>
      <label className="demo-label">
        Size medium (default)
        <Confirm text="Confirm" theme={theme} size="medium" />
      </label>

      <label className="demo-label">
        Size large
        <Confirm text="Confirm" theme={theme} size="large" />
      </label>
      <label className="demo-label">
        Disabled
        <Confirm text="Confirm" disabled={true} theme={theme} />
      </label>
      <label className="demo-label">
        Disabled on confirm
        <Confirm text="Confirm" theme={theme} disableOnConfirm={true} />
      </label>
    </Display>
  );
}
