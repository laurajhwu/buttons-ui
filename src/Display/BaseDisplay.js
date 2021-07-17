import React from "react";

import { Article, Title, Description, Code, DemoBlock } from "./styles";

export default function BaseDisplay(props) {
  const { title, description, code, children } = props;
  return (
    <Article>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Code className="line-numbers">{code()}</Code>
      <DemoBlock>{children}</DemoBlock>
    </Article>
  );
}
