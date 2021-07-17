import styled from "styled-components";
import { ButtonBase } from "../../ButtonBase/styles";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#38636D")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#B9EFE7")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : "#719198"};
  }
  &:active {
    background-color: #2d4f57;
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

export const Arrow = styled(ArrowIosDownwardOutline)`
  width: 20px;
  margin-left: 12px;
  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Select = styled.div`
  ${(props) => ({ ...(props.theme || {}) })}
`;

export const Options = styled.div`
  border: 1px solid #38636d;
  border-top: transparent;
  border-radius: 0 0 10px 10px;
  width: 90%;
  margin: 0 auto;
  font-size: 1rem;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  & option {
    padding: 5px 10px;
    color: #38636d;
    &:hover {
      cursor: pointer;
      background-color: #cdf3ee;
    }
  }

  ${(props) => ({ ...(props.theme || {}) })}
`;
