import { useState } from "react";
import useDarkMode from "./utils/useDarkMode";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode(false);
  const [isAurebesh, setIsAurebesh] = useState(true);
  const [isVertical, setIsVertical] = useState(false);

  const toggleIsAurebesh = () => setIsAurebesh((prevState) => !prevState);
  const toggleIsVertical = () => setIsVertical((prevState) => !prevState);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        toggleIsAurebesh={toggleIsAurebesh}
        isAurebesh={isAurebesh}
        toggleIsVertical={toggleIsVertical}
        isVertical={isVertical}
      />

      <h1>Aurebesh Translator</h1>

      <AurebeshTranslatorComponent
        data={`may the 4th be with you!`}
        scale={0.5}
        isWhite={isDarkMode}
        isVertical={isVertical}
        isAurebesh={isAurebesh}
        verticalLetterSpacing = "-7px"
        horizontalLetterSpacing = "10px"
      />
    </div>
  );
}

export default App;
