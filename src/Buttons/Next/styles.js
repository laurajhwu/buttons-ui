import styled from "styled-components";
import { ButtonBase } from "../ButtonBase/styles";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "transparent")};
  border: ${(props) =>
    props.disabled ? "2px solid transparent" : "2px solid #9b9b9b"};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#4A4A4A")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : " #F1F1F1"};
    border: 2px solid transparent;
  }
  &:active {
    background-color: #cbcbcb;
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
  margin-left: 12px;
  ${(props) => ({ ...(props.theme || {}) })};
`;
