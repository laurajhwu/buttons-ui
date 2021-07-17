import React from "react";

import { Button, Icon, Text, FileInput, Label } from "./styles";

export default function Upload(props) {
  const { disabled, text, iconEnd, iconStart, theme, type, onChange } = props;

  return (
    <Button theme={theme?.button} disabled={disabled}>
      <Label htmlFor="upload-file" theme={theme?.label}>
        {iconStart && <Icon src={iconStart} theme={theme?.icon} />}
        <Text theme={theme?.text}>{text}</Text>
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} />}
        <FileInput type="file" accept={type || "*"} id="upload-file" />
      </Label>
    </Button>
  );
}
