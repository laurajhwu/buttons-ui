import React, { useRef } from "react";

import { Button, Icon, Text, Target } from "./styles";

export default function FullScreen(props) {
  const { disabled, text, iconEnd, iconStart, theme, target } = props;
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
        {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
        <Text theme={theme?.text}>{text}</Text>
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
      </Button>
    </>
  );
}
