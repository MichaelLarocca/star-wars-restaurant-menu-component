import ToggleButton from "../ToggleButton/ToggleButton.jsx";

function Navbar({
  toggleDarkMode,
  isDarkMode,
  toggleIsAurebesh,
  isAurebesh,
  toggleIsVertical,
  isVertical,
}) {
  return (
    <nav>
      <ToggleButton
        onClick={toggleDarkMode}
        isActive={isDarkMode}
        label="Toggle DarkMode"
      />
      <ToggleButton
        onClick={toggleIsAurebesh}
        isActive={isAurebesh}
        label="Toggle Aurebesh Language"
      />
      <ToggleButton
        onClick={toggleIsVertical}
        isActive={isVertical}
        label="Toggle Vertical Layout"
      />
    </nav>
  );
}

export default Navbar;
