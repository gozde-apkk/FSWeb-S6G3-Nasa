import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "white"};
  background: blue;
  border: none;
  border-radius: 3px;
`;
export default Input ;