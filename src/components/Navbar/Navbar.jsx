import ToggleButton from "../ToggleButton/ToggleButton.jsx";

// Navbar component
// This component renders a navigation bar with toggle buttons for various settings.
function Navbar({
  toggleDarkMode, // Function to toggle dark mode
  isDarkMode, // Boolean indicating if dark mode is active
  toggleIsAurebesh, // Function to toggle Aurebesh translation
  isAurebesh, // Boolean indicating if Aurebesh translation is active
  toggleIsVertical, // Function to toggle vertical text layout
  isVertical, // Boolean indicating if vertical layout is active
}) {
  return (
    <nav>
      {/* Toggle button for dark mode */}
      <ToggleButton
        onClick={toggleDarkMode}
        isActive={isDarkMode}
        label="Toggle DarkMode"
      />
      {/* Toggle button for Aurebesh language translation */}
      <ToggleButton
        onClick={toggleIsAurebesh}
        isActive={isAurebesh}
        label="Toggle Aurebesh Language"
      />
      {/* Toggle button for vertical text layout */}
      <ToggleButton
        onClick={toggleIsVertical}
        isActive={isVertical}
        label="Toggle Vertical Layout"
      />
    </nav>
  );
}

export default Navbar;


// import ToggleButton from "../ToggleButton/ToggleButton.jsx";

// function Navbar({
//   toggleDarkMode,
//   isDarkMode,
//   toggleIsAurebesh,
//   isAurebesh,
//   toggleIsVertical,
//   isVertical,
// }) {
//   return (
//     <nav>
//       <ToggleButton
//         onClick={toggleDarkMode}
//         isActive={isDarkMode}
//         label="Toggle DarkMode"
//       />
//       <ToggleButton
//         onClick={toggleIsAurebesh}
//         isActive={isAurebesh}
//         label="Toggle Aurebesh Language"
//       />
//       <ToggleButton
//         onClick={toggleIsVertical}
//         isActive={isVertical}
//         label="Toggle Vertical Layout"
//       />
//     </nav>
//   );
// }

// export default Navbar;
