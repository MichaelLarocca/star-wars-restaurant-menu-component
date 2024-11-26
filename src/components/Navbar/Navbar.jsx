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
        label="Toggle Theme"
      />
      <ToggleButton
        onClick={toggleIsAurebesh}
        isActive={isAurebesh}
        label="Toggle Language"
      />
      <ToggleButton
        onClick={toggleIsVertical}
        isActive={isVertical}
        label="Toggle Layout"
      />
    </nav>
  );
}

export default Navbar;
