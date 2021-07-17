import React from "react";

import { Button, Icon, Text, Arrow } from "./styles";

export default function Confirm(props) {
  const { disabled, text, iconEnd, iconStart, theme, size } = props;

  return (
    <Button theme={theme?.button} disabled={disabled} size={size}>
      {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
      <Text theme={theme?.text}>{text}</Text>
      {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
      {size !== "small" && <Arrow theme={theme?.arrow} />}
    </Button>
  );
}
