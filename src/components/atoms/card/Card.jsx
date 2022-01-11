import styled from "styled-components";

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 8px 2px;
  border-radius: 8px;
  padding: 16px;
`;

export const Card = ({ children }) => {
  return <SCard>{children}</SCard>;
};
