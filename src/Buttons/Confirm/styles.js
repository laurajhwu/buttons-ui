import styled from "styled-components";
import { ButtonBase } from "../ButtonBase/styles";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#38636D")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#B9EFE7")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  height: ${(props) => (props.size === "small" ? "32px" : "auto")};
  padding: ${(props) => (props.size === "small" ? "6px 16px" : "10px 16px")};
  width: ${(props) =>
    props.size === "small"
      ? "auto"
      : props.size === "large"
      ? "300px"
      : "200px"};
  position: relative;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : " #719198"};
  }
  &:active {
    background-color: #2d4f57;
  }
  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Icon = styled.img`
  margin-left: ${(props) => (props.type === "start" ? 0 : "12px")};
  margin-right: ${(props) => (props.type === "end" ? 0 : "12px")};
  width: 18px;
  ${(props) => ({ ...(props.theme || {}) })}
`;

export const Text = styled.span`
  display: inline-block;
  vertical-align: middle;

  ${(props) => ({ ...(props.theme || {}) })}
`;

export const Arrow = styled(ArrowIosForwardOutline)`
  width: 20px;
  position: absolute;
  right: 16px;
  ${(props) => ({ ...(props.theme || {}) })};
`;
