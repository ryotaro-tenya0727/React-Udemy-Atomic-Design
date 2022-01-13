import styled from "styled-components";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

import { SearchInput } from "./../molecules/SearchInput";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `遼太郎-${val}`,
    image: "https://source.unsplash.com/yihlaRCCvd4",
    email: "aa@ss.cc",
    phone: "000-999-666",
    company: {
      name: "遼太郎株式会社"
    },
    website: "https://momo.com"
  };
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
