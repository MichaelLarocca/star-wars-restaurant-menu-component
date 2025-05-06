import { useState } from "react";
import useDarkMode from "./utils/useDarkMode";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Anakin from "/Anakin.png"; // Assuming this is the working image
import "./App.css";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode(false);
  const [isAurebesh, setIsAurebesh] = useState(true);
  const [isVertical, setIsVertical] = useState(false);

  const toggleIsAurebesh = () => setIsAurebesh((prevState) => !prevState);
  const toggleIsVertical = () => setIsVertical((prevState) => !prevState);

  // Array of meal categories, images, slogans, and items
  const meals = [
    {
      category: "From the Cantina",
      image: Anakin, // Placeholder image
      slogan: "This is where the fun begins!",
      items: [
        { price: "$8", name: "Jedi Shirley Temple" },
        { price: "$12", name: "Mangolorian Martini" },
        { price: "$10", name: "Qui Gon's Gin" },
        { price: "$11", name: "Mustafar Mojitos" },
        { price: "$9", name: "Tatooine Sunrise" },
      ],
    },
    {
      category: "Ackbar’s Snackbar",
      image: Anakin, // Same placeholder image
      slogan: "This is where the fun begins!",
      items: [
        { price: "$18", name: "This is Where the Fun Begins (Appetizer Sampler)" },
        { price: "$6", name: "Skywalker Ranch French Fries" },
        { price: "$8", name: "They Fry Now?? (Fried Cauliflower)" },
        { price: "$10", name: "Dark Sliders" },
        { price: "$9", name: "Windu Wings (Not Spicy)" },
      ],
    },
    {
      category: "The Solo Menu",
      image: Anakin, // Same placeholder image
      slogan: "This is where the fun begins!",
      items: [
        { price: "$14", name: "Boba Fettaccini" },
        { price: "$13", name: "General Hux Chicken" },
        { price: "$16", name: "That’s Not How the Force Works Pizza" },
        { price: "$15", name: "There’s Always a Bigger Fish" },
        { price: "$18", name: "R2 Cheese 2 Pizza" },
      ],
    },
    {
      category: "Padawan Treats",
      image: Anakin, // Same placeholder image
      slogan: "This is where the fun begins!",
      items: [
        { price: "$5", name: "Baby Yoda Boba" },
        { price: "$4", name: "Kaminoan Cola" },
        { price: "$4", name: "Mountain Dew It!" },
        { price: "$7", name: "BB-Steak" },
        { price: "$6", name: "Podracing Popsicles" },
      ],
    },
    {
      category: "The Final Order",
      image: Anakin, // Same placeholder image
      slogan: "This is where the fun begins!",
      items: [
        { price: "$9", name: "Chocolate Mouse-tafar Cake" },
        { price: "$8", name: "Wookie Cookies" },
        { price: "$7", name: "Obi Wan Cannolis" },
        { price: "$6", name: "C-3-Churros" },
        { price: "$5", name: "Leia Buns" },
      ],
    },
  ];

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

      {meals.map((meal, mealIndex) => (
        <div key={mealIndex}>
          <div>
            <img src={meal.image} alt={`${meal.category} Image`} style={{ width: '300px', height: 'auto', display: 'flex', flexWrap: 'wrap' }} />
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
            <div style={{ transform: 'translateX(-50px)' }}>
              {meal.items.map((item, itemIndex) => (
                <AurebeshTranslatorComponent
                  key={itemIndex}
                  data={`${item.price} - ${item.name}`}
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