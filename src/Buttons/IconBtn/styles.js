import styled from "styled-components";
import { ButtonBase } from "../../ButtonBase/styles";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#EBEBEB")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#4A4A4A")};
  padding: ${(props) => (props.circle ? "16px" : "8px")};
  border-radius: ${(props) => (props.circle ? "50%" : "10px")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : "#F1F1F1"};
  }
  &:active {
    background-color: #cbcbcb;
  }
  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Icon = styled.img`
  width: 24px;
  ${(props) => ({ ...(props.theme || {}) })}
`;
