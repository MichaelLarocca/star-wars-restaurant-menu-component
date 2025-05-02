import { useState } from "react";
import useDarkMode from "./utils/useDarkMode";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  // Use custom hook to manage dark mode state
  const [isDarkMode, toggleDarkMode] = useDarkMode(false);
  // State to toggle between English and Aurebesh translation
  const [isAurebesh, setIsAurebesh] = useState(true);
  // State to toggle text orientation between horizontal and vertical
  const [isVertical, setIsVertical] = useState(false);

  // Function to toggle Aurebesh translation on and off
  const toggleIsAurebesh = () => setIsAurebesh((prevState) => !prevState);
  // Function to toggle text orientation between vertical and horizontal
  const toggleIsVertical = () => setIsVertical((prevState) => !prevState);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar component with toggle functions and states passed as props */}
      <Navbar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        toggleIsAurebesh={toggleIsAurebesh}
        isAurebesh={isAurebesh}
        toggleIsVertical={toggleIsVertical}
        isVertical={isVertical}
      />

      <h1>Aurebesh Translator</h1>

      {/* AurebeshTranslatorComponent with various props for customization */}
      <AurebeshTranslatorComponent
        data={`may the 4th be with you!`} // Text to be translated
        isAurebesh={isAurebesh} // Toggle for Aurebesh translation
        scale={.5} // Scale of the text
        isWhite={isDarkMode} // Text color based on dark mode
        isVertical={isVertical} // Text orientation
        verticalLetterSpacing="-7px" // Letter spacing for vertical text
        horizontalLetterSpacing="10px" // Letter spacing for horizontal text
        fontSize={"16px"} // Font size of the text
      />
    </div>
  );
}

export default App;