import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = ({ children, onClick }) => {
  console.log("second");
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
