import React, { useState, useEffect } from "react";

import { Button, Icon, Text, Select, Options, Arrow } from "./styles";

export default function SelectBtn(props) {
  const {
    disabled,
    defaultValue,
    iconEnd,
    iconStart,
    theme,
    onSelect,
    options,
    settings,
  } = props;
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  function handleSelect(event) {
    setValue(event.target.innerHTML);
    settings?.hideOnSelect && setShow(false);
  }

  function handleClickButton(event) {
    event.stopPropagation();
    setShow(!show);
  }

  useEffect(() => {
    if (options) {
      setValue(
        options.find(
          (option) => defaultValue === (option.value || option.content)
        )?.content || options[0].content
      );
    }
  }, []);

  useEffect(() => {
    if (onSelect) {
      onSelect(value);
    }
  }, [value]);

  return (
    <Select theme={theme?.select}>
      <Button
        theme={theme?.button}
        disabled={disabled}
        onClick={handleClickButton}
      >
        {iconStart && <Icon src={iconStart} theme={theme?.icon} type="start" />}
        <Text theme={theme?.text}>{value}</Text>
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
        <Arrow />
      </Button>
      <Options theme={theme?.options} show={show}>
        {options.map((opt) => (
          <option
            value={opt.value || opt.content}
            key={opt.key}
            onClick={handleSelect}
          >
            {opt.content}
          </option>
        ))}
      </Options>
    </Select>
  );
}
