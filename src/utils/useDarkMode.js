import { useState } from "react";

function useDarkMode(initialMode = true) {
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
