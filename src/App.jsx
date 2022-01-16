import { Routers } from "./router/Routers";
import "./styles.css";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Routers />
      </UserProvider>
    </RecoilRoot>
  );
}
