import React from "react";
import { Link } from "react-router-dom";

import { Article, Title, Description, Code, DemoBlock } from "./styles";

const style = {
  textDecoration: "none",
  color: "unset",
  cursor: "unset",
  "&:focus, &:hover, &:visited, &:link, &:active": {
    textDecoration: "none",
    color: "unset",
    cursor: "unset",
  },
};

export default function BaseDisplay(props) {
  const { title, description, code, children, tag } = props;
  return (
    <Article>
      <Link path={`/#${tag}`} style={style}>
        <Title>{title}</Title>
      </Link>

      <Description>{description}</Description>
      <Code className="line-numbers">{code()}</Code>
      <DemoBlock>{children}</DemoBlock>
    </Article>
  );
}
