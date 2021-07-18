import styled from "styled-components";

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
