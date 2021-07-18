import styled from "styled-components";
import { ButtonBase } from "../ButtonBase/styles";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline";

export const Button = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#38636D")};
  color: ${(props) => (props.disabled ? "#9b9b9b" : "#B9EFE7")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  width: 180px;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#f7f7f7 !important" : "#719198"};
  }
  &:active {
    background-color: #2d4f57;
  }
  position: relative;
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
  position: absolute;
  left: ${(props) => (props.type === "end" ? "" : "16px")};
  right: ${(props) => (props.type === "start" ? "" : "16px")};
  width: 18px;
  ${(props) => ({ ...(props.theme || {}) })}
`;

export const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 12px;
  ${(props) => ({ ...(props.theme || {}) })}
`;

export const Arrow = styled(ArrowIosDownwardOutline)`
  width: 20px;
  margin-left: 12px;
  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${(props) => ({ ...(props.theme || {}) })};
`;

export const Options = styled.div`
  border: 1px solid #38636d;
  border-top: transparent;
  border-radius: 0 0 10px 10px;
  width: 90%;
  margin: 0 auto;
  font-size: 1rem;
  background-color: white;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%;
  max-height: 120px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & > option {
    padding: 5px 10px;
    color: #38636d;
    &:hover {
      cursor: pointer;
      background-color: #cdf3ee;
    }
    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }

  ${(props) => ({ ...(props.theme || {}) })}
`;
