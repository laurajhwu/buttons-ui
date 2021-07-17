import styled from "styled-components";
import { ButtonBase } from "../../ButtonBase/styles";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#B9EFE7")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#28646e")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : " #cdf3ee"};
  }
  &:active {
    background-color: #9fd3ce;
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

export const Target = styled.div`
  pointer-events: none;
  ${(props) => ({ ...(props.theme || {}) })}
`;
