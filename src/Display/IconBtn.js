import Display from "./BaseDisplay";
import IconBtn from "../Buttons/IconBtn";
import PlaceholderIcon from "../images/placeholder.svg";
import { LinkIcon } from "./styles";
import usePushTag from "./hooks/usePushTag";

const theme = {
  button: {
    marginTop: "10px",
    //button styles
  },
  icon: {
    //icon styling
  },
};

export default function IconBtnMain() {
  const pushTag = usePushTag("iconbtn");

  return (
    <Display
      title={
        <span id="iconbtn" onClick={pushTag}>
          <LinkIcon />
          Icon Button
        </span>
      }
      description={
        <>
          Button based on icons. Contains a <code>circle</code> property, that
          accepts a <code>boolean</code> , to convert button to a circle.
          <br />
        </>
      }
      code={() => (
        <code className="language-js">
          {`import PlaceholderIcon from "../images/placeholder.svg";
          ...
          //Customized Styles
            const theme = {
              \u00A0button: {
                \u00A0\u00A0marginTop: "10px",
                \u00A0\u00A0//button styles
              \u00A0},
              \u00A0icon: {
                \u00A0\u00A0//icon styling
              \u00A0},
            };
            ...
            //Render Button
            return (
           \u00A0<IconBtn
            \u00A0\u00A0theme={theme}
            \u00A0\u00A0disabled={false}
            \u00A0\u00A0circle={false}  
            \u00A0\u00A0icon={PlaceholderIcon}
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
