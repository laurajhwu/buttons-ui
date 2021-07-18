import React from "react";

import { Button, Icon } from "./styles";

export default function IconBtn(props) {
  const { disabled, icon, theme, circle, children } = props;

  return (
    <Button theme={theme?.button} disabled={disabled} circle={circle}>
      {icon && <Icon src={icon} theme={theme?.icon} />}
      {children}
    </Button>
  );
}
