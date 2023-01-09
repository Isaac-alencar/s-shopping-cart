import styled from "styled-components";

export const Text = styled.span`
  font-family: sans-serif;
  font-size: 1rem;
  color: #333333;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`