import React, { useRef } from "react";

import { Button, Icon, Text } from "./styles";

export default function FullScreen(props) {
  const { disabled, text, icon, theme, target } = props;
  const targetRef = useRef();

  return (
    <>
      {target(targetRef)}
      <Button theme={theme?.button} disabled={disabled}>
        <Icon src={icon} theme={theme?.icon} />
        <Text theme={theme?.text}>{text}</Text>
      </Button>
    </>
  );
}
