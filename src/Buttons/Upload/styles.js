import styled from "styled-components";
import { ButtonBase } from "../../ButtonBase/styles";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#E5E5E5")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#4A4A4A")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : " #EFEFEF"};
  }
  &:active {
    background-color: #cbcbcb;
  }
  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  ${(props) => ({ ...(props.theme || {}) })}
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

export const FileInput = styled.input`
  display: none;
`;
