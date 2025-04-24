// ToggleButton component
// This component renders a button that toggles between active and inactive states.
function ToggleButton({ onClick, isActive, label }) {
  return (
    <button onClick={onClick} style={{ marginBottom: "10px" }}>
      {/* Display the label and current state of the button */}
      {label} (Current: {isActive ? "On" : "Off"})
    </button>
  );
}

export default ToggleButton;

// function ToggleButton({ onClick, isActive, label }) {
//   return (
//     <button onClick={onClick} style={{ marginBottom: "10px" }}>
//       {label} (Current: {isActive ? "On" : "Off"})
//     </button>
//   );
// }

// export default ToggleButton;
