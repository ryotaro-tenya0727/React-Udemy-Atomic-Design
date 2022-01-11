import styled from "styled-components";

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 99px;
  outline: none;
`;
export const Input = ({ placeholder = "" }) => {
  return <SInput type="text" placeholder={placeholder} />;
};
