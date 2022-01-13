import styled from "styled-components";
import { BaseButton } from "./BaseButton";
import { memo } from "react";

export const SecondaryButton = memo(({ children, onClick }) => {
  return <SButton onClick={onClick}>{children}</SButton>;
});

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
