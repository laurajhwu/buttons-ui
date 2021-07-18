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
    hideOnSelect,
    children,
  } = props;
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  function handleSelect(event) {
    setValue(event.target.innerHTML);
    if (!hideOnSelect && hideOnSelect !== undefined) {
      setShow(false);
    }
  }

  function handleClickButton(event) {
    event.stopPropagation();
    setShow(!show);
  }

  useEffect(() => {
    if (options) {
      setValue(
        options.find(
          (option) =>
            defaultValue === option.value || defaultValue === option.content
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
        {children}
        {iconEnd && <Icon src={iconEnd} theme={theme?.icon} type="end" />}
        <Arrow theme={theme?.arrow} />
      </Button>
      <Options theme={theme?.options} show={show}>
        {options &&
          options.map((opt) => (
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
