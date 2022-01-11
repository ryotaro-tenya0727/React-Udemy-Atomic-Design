import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";

import "./styles.css";

const user = {
  name: "遼太郎",
  image: "https://source.unsplash.com/yihlaRCCvd4",
  email: "aa@ss.cc",
  phone: "000-999-666",
  company: {
    name: "遼太郎株式会社"
  },
  website: "https://momo.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ほにたん</PrimaryButton>
        <SecondaryButton>うるむ</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
