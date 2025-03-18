import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextContainer from "./components/main/textContainer";
import { textArrat } from "./fixture/textContainer";
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {textArrat.map((obj, index) => (
        <TextContainer {...obj} />
      ))}
    </>
  );
}

export default App;
