import Display from "./BaseDisplay";
import IconBtn from "../Buttons/IconBtn";
import PlaceholderIcon from "../images/placeholder.svg";

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
};

export default function IconBtnMain() {
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
        Default
        <IconBtn text="Next" theme={theme} icon={PlaceholderIcon} />
      </label>
      <label className="demo-label">
        Disabled
        <IconBtn
          text="Next"
          disabled={true}
          theme={theme}
          icon={PlaceholderIcon}
        />
      </label>
      <label className="demo-label">
        Circle
        <IconBtn
          text="Next"
          disabled={false}
          circle={true}
          theme={theme}
          icon={PlaceholderIcon}
        />
      </label>
    </Display>
  );
}
