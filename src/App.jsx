import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ほにたん</PrimaryButton>
      <SecondaryButton>うるむ</SecondaryButton>
    </div>
  );
}
