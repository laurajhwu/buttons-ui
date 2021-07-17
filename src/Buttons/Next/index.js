import React from "react";

import { Button, Icon, Text, Arrow } from "./styles";

export default function Next(props) {
  const { disabled, text, iconEnd, iconStart, theme } = props;

  return (
    <Button theme={theme?.button} disabled={disabled}>
      {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
      <Text theme={theme?.text}>{text}</Text>
      {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
      <Arrow theme={theme?.arrow} />
    </Button>
  );
}
