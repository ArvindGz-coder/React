import "./App.css";
import InlineStyleComponent from "./components/InlineStyleComponent";
import ExternalCSSComponent from "./components/ExternalCSSComponent";
import CSSModuleComponent from "./components/CSSModuleComponent";
import StyledComponentDemo from "./components/StyledComponentDemo";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Styling Demo</h1>

      <InlineStyleComponent />
      <ExternalCSSComponent />
      <CSSModuleComponent />
      <StyledComponentDemo />
    </div>
  );
}

export default App;