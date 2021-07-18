import React from "react";
import uuid from "react-uuid";
import { Button, Icon, Text, FileInput, Label } from "./styles";

export default function Upload(props) {
  const id = uuid();
  const {
    disabled,
    text,
    iconEnd,
    iconStart,
    theme,
    onChange,
    accept,
    children,
  } = props;

  function handleOnChange(event) {
    const file = event.target.files[0];

    if (file) {
      onChange && onChange(file);
    } else {
      throw "no file was uploaded";
    }
  }

  return (
    <Button theme={theme?.button} disabled={disabled}>
      <Label htmlFor={`upload-file${id}`} theme={theme?.label}>
        {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
        <Text theme={theme?.text}>{text}</Text>
        {children}
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
        <FileInput
          type="file"
          accept={accept || "*"}
          id={`upload-file${id}`}
          onChange={handleOnChange}
        />
      </Label>
    </Button>
  );
}
