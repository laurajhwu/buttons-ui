import styled from "styled-components";

export const Article = styled.article`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  padding-bottom: 0.3em;
  padding-top: 24px;
  border-bottom: 1px solid #eaecef;
  border-top: 1px solid #eaecef;
`;

export const Description = styled.div``;

export const Code = styled.pre`
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
  & code {
    background-color: initial;
  }
`;

export const DemoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
