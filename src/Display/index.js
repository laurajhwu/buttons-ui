import React from "react";

import { Article, Title, Description, Code, DemoBlock } from "./styles";

export default function Layout(props) {
  const { title, description, code, children } = props;
  return (
    <Article>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Code>{code()}</Code>
      <DemoBlock>{children}</DemoBlock>
    </Article>
  );
}
