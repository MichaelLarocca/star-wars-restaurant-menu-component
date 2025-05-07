import { useState } from "react";
import useDarkMode from "./utils/useDarkMode";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { meals } from "./utils/menuData.js";
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

      <AurebeshTranslatorComponent
        data={`menu`}
        isAurebesh={isAurebesh}
        scale={1.5}
        isWhite={isDarkMode}
        isVertical={false}
        verticalLetterSpacing="-7px"
        horizontalLetterSpacing="10px"
        fontSize={"50px"}
      />

      {meals.map((meal, mealIndex) => (
        <div key={mealIndex}>
          <div className="flex-column-center">
            <img src={meal.image} alt={`${meal.category} Image`} className="image-style" />
            <div>
              <em>
                <AurebeshTranslatorComponent
                  data={`"${meal.slogan}"`}
                  isAurebesh={isAurebesh}
                  scale={.4}
                  isWhite={isDarkMode}
                  isVertical={false}
                  verticalLetterSpacing="-7px"
                  horizontalLetterSpacing="10px"
                  fontSize={"16px"}
                />
              </em>
            </div>
          </div>
          <div className="menu-container">
            <div className="meal-category">
              <AurebeshTranslatorComponent
                data={`*${meal.category}*`}
                isAurebesh={isAurebesh}
                scale={1}
                isWhite={isDarkMode}
                isVertical={true}
                verticalLetterSpacing="-7px"
                horizontalLetterSpacing="10px"
                fontSize={"30px"}
              />
            </div>
            <div className="translate-left">
              {meal.items.map((item, itemIndex) => (
                <AurebeshTranslatorComponent
                  key={itemIndex}
                  data={`${item.price} : ${item.name}`}
                  isAurebesh={isAurebesh}
                  scale={.5}
                  isWhite={isDarkMode}
                  isVertical={false}
                  verticalLetterSpacing="-7px"
                  horizontalLetterSpacing="10px"
                  fontSize={"16px"}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;