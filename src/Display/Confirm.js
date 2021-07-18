import { useState } from "react";
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

export default function ConfirmBtn() {
  const [isReset, setIsReset] = useState(false);
  const [disableOnConfirm, setDisableOnConfirm] = useState(true);

  function handleOnClick() {
    setIsReset(true);
  }

  function handleReset() {
    setDisableOnConfirm(false);
    setIsReset(false);
    window.setTimeout(() => setDisableOnConfirm(true), 0);
  }

  return (
    <Display
      title="Confirm Button"
      description={
        <>
          Confirm button that consists of small, medium (default), and large
          sizes.
          <br />
          <ul>
            <li>
              <code>size</code>: accepts values of <code>small</code>,{" "}
              <code>medium</code>, <code>large</code>
            </li>
            <br />
            <li>
              <code>disableOnConfirm</code>: accepts a <code>boolean</code>{" "}
              value. If <code>true</code>, the button will be disabled once
              clicked to prevent multiple clicks.
              <br />
              <br />
              Once <code>disableOnConfirm</code> is set to <code>false</code>,
              the button will become clickable again.
              <strong>(try demo below)</strong>
            </li>
            <br />
          </ul>
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
            //Demo on how to use disableOnConfirm
            const [isReset, setIsReset] = useState(false);
            const [disableOnConfirm, setDisableOnConfirm] = useState(true);

            function handleOnClick() {
              \u00A0setIsReset(true);
            }

            function handleReset() {
               \u00A0setDisableOnConfirm(false);
               \u00A0setIsReset(false);
               \u00A0window.setTimeout(() => setDisableOnConfirm(true), 0);
            }
            ...
            //Render Button
            return (
           \u00A0<Confirm
            \u00A0\u00A0text="Confirm"
            \u00A0\u00A0theme={theme}
            \u00A0\u00A0disabled={false}
            \u00A0\u00A0onClick={handleOnClick}
            \u00A0\u00A0disableOnConfirm={disableOnConfirm}
            \u00A0/>
            \u00A0{isReset && (
              \u00A0\u00A0<span id="reset" onClick={handleReset}>
                \u00A0\u00A0\u00A0reset
              \u00A0</span>
            \u00A0)}
          );`}
        </code>
      )}
    >
      <label className="demo-label" htmlFor="democ1">
        Size small
        <Confirm text="Confirm" theme={theme} size="small" id="democ1" />
      </label>
      <label className="demo-label" htmlFor="democ2">
        Size medium (default)
        <Confirm text="Confirm" theme={theme} size="medium" id="democ2" />
      </label>

      <label className="demo-label" htmlFor="democ3">
        Size large
        <Confirm text="Confirm" theme={theme} size="large" id="democ3" />
      </label>
      <label className="demo-label" htmlFor="democ4">
        Disabled
        <Confirm text="Confirm" disabled={true} theme={theme} id="democ4" />
      </label>
      <label className="demo-label" htmlFor="democ5">
        Disabled on confirm
        <Confirm
          text="Confirm"
          theme={theme}
          disableOnConfirm={disableOnConfirm}
          onClick={handleOnClick}
          id="democ5"
        />
      </label>
      {isReset && (
        <span id="reset" onClick={handleReset}>
          reset
        </span>
      )}
    </Display>
  );
}
