import styled from "styled-components";

export const Article = styled.article`
  max-width: 1024px;
  margin: 0 auto;
  & code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  }
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
  white-space: pre-line;
  height: 300px;
  & code {
    background-color: initial;
    font-size: 0.9rem;
    & * {
      display: inline-block;
    }
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

export const File = styled.div`
  width: 120px;
  margin-right: 20px;
  position: absolute;
  left: 100px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  & > div {
    font-weight: 600;
  }
`;
