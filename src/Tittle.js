import  styled  from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white  ;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
export default Title ;