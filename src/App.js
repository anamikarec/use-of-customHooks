import Abc from "./Components/Abc";
import Button from "./Components/Button";
import CustomHooks from "./Components/CustomHooks";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <Button label="Button" />
      <CustomHooks />
      <Abc />
    </div>
  );
}
