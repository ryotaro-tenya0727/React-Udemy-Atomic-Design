import styled from "styled-components";
import { SecondaryButton } from "./../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
// import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

const SContainer = styled.div`
  text-align: center;
`;

export const Top = () => {
  console.log("top");
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};
