import React from "react";

import { Button, Icon, Text, Select, Options, Arrow } from "./styles";

export default function SelectBtn(props) {
  const { disabled, text, iconEnd, iconStart, theme, onChange, options } =
    props;

  return (
    <Select theme={theme?.select}>
      <Button theme={theme?.button} disabled={disabled}>
        {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
        <Text theme={theme?.text}>{text}</Text>
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
        <Arrow />
      </Button>
      <Options theme={theme?.options}>
        {options.map((option) => (
          <option value={option.value || option.content} key={option.key}>
            {option.content}
          </option>
        ))}
      </Options>
    </Select>
  );
}
