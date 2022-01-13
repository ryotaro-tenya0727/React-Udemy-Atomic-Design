import { Routers } from "./router/Routers";
import "./styles.css";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Routers />
    </UserProvider>
  );
}
