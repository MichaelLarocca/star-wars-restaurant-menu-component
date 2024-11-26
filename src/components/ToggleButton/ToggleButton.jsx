function ToggleButton({ onClick, isActive, label }) {
  return (
    <button onClick={onClick} style={{ marginBottom: "10px" }}>
      {label} (Current: {isActive ? "On" : "Off"})
    </button>
  );
}

export default ToggleButton;
