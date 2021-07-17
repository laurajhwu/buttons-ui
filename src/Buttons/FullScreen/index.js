import React, { useRef } from "react";

import { Button, Icon, Text, Target } from "./styles";

export default function FullScreen(props) {
  const { disabled, text, icon, theme, target } = props;
  const targetRef = useRef();

  function handleFullScreen() {
    if (!document.fullscreenElement) {
      targetRef.current.requestFullscreen();
    } else if (targetRef.current.webkitRequestFullscreen) {
      targetRef.current.webkitRequestFullscreen();
    } else if (targetRef.current.msRequestFullscreen) {
      targetRef.current.msRequestFullscreen();
    }
  }

  return (
    <>
      <Target theme={theme?.target}>{target(targetRef)}</Target>
      <Button
        theme={theme?.button}
        disabled={disabled}
        onClick={handleFullScreen}
      >
        {icon && <Icon src={icon} theme={theme?.icon} />}
        <Text theme={theme?.text}>{text}</Text>
      </Button>
    </>
  );
}
