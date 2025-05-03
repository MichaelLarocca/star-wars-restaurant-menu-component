import { useState } from "react";
import useDarkMode from "./utils/useDarkMode";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Anakin from "/Anakin.png";
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

      <div>
        <AurebeshTranslatorComponent
          data={`Menu`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={1.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"50px"} // Font size of the text
        />
        </div>

      <img src={Anakin} alt="Anakin Skywalker"  style={{ width: '300px', height: 'auto', display: 'flex', flexWrap: 'wrap' }} />

      <div>
        <em>
        <AurebeshTranslatorComponent
          data={`"this is where the fun begins!"`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.4} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />
        </em>
        </div>

      <div className="menu-container">
        <div>
        <AurebeshTranslatorComponent
          data={`*appetizers*`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={1} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={true} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"30px"} // Font size of the text
        />
        </div>
        <div style={{ transform: 'translateX(-50px)' }}>
        <AurebeshTranslatorComponent
          data={`$12 - obi wan pierogis`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />
        <AurebeshTranslatorComponent
          data={`$10 - greedo’s burritos`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />
        <AurebeshTranslatorComponent
          data={`$9 - tusken raider taters `} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />
        <AurebeshTranslatorComponent
          data={`$14 - bantha wings`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />        
        <AurebeshTranslatorComponent
          data={`$8 - wookiee wontons`} // Text to be translated
          isAurebesh={isAurebesh} // Toggle for Aurebesh translation
          scale={.5} // Scale of the text
          isWhite={isDarkMode} // Text color based on dark mode
          isVertical={false} // Text orientation
          verticalLetterSpacing="-7px" // Letter spacing for vertical text
          horizontalLetterSpacing="10px" // Letter spacing for horizontal text
          fontSize={"16px"} // Font size of the text
        />        
        </div>
      </div>
      </div>
  );
}

export default App;