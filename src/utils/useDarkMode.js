import { useState } from "react";

// Custom hook to manage the dark mode state
function useDarkMode(initialMode = true) {
  // Initialize state to track if dark mode is enabled, defaulting to initialMode
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  // Return the current dark mode state and the function to toggle it
  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;


// import { useState } from "react";

// function useDarkMode(initialMode = true) {
//   const [isDarkMode, setIsDarkMode] = useState(initialMode);

//   const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

//   return [isDarkMode, toggleDarkMode];
// }

// export default useDarkMode;
