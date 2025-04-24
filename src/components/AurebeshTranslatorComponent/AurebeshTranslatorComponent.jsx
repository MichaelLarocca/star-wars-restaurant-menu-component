import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";
import cssFile from "../AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

// AurebeshTranslatorComponent
// This component translates English text to Aurebesh and displays it with customizable styles.
function AurebeshTranslatorComponent({
  data, // The text to be translated
  isAurebesh = true, // Flag to determine if the text should be translated to Aurebesh
  scale = 1, // Scale factor for the size of the translated text
  isWhite = false, // Flag to determine if the text color should be white
  isVertical = false, // Flag to determine if the text should be displayed vertically
  verticalLetterSpacing = "-7px", // Letter spacing for vertical text
  horizontalLetterSpacing = "10px", // Letter spacing for horizontal text
  fontSize = "16px" // Font size of the text
}) {
  return (
    <div
      className={`${cssFile.aurebeshTranslator} ${isVertical && !isAurebesh ? cssFile.verticalText : ""}`}
      style={{ 
        display: isVertical ? "block" : "flex", // Display style based on text orientation
        alignItems: "center",
        letterSpacing: isVertical ? verticalLetterSpacing : horizontalLetterSpacing, // Apply appropriate letter spacing
        fontSize: fontSize, // Set font size
       }}
    >
      {isAurebesh ? aurebeshTranslator(data, scale, isWhite, isVertical) : data} {/* Render translated or original text */}
    </div>
  );
}

export default AurebeshTranslatorComponent;

// import { useState } from "react";
// import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";
// import cssFile from "../AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

// function AurebeshTranslatorComponent({
//   data,
//   isAurebesh = true,
//   scale = 1,
//   isWhite = false,
//   isVertical = false,
//   verticalLetterSpacing = "-7px",
//   horizontalLetterSpacing = "10px",
//   fontSize = "16px"
  
// }) {
//   return (
//     <div
//       className={`${cssFile.aurebeshTranslator} ${isVertical && !isAurebesh ? cssFile.verticalText : ""}`}
//       style={{ 
//         display: isVertical ? "block" : "flex", 
//         alignItems: "center",
//         letterSpacing: isVertical ? verticalLetterSpacing : horizontalLetterSpacing,
//         fontSize: fontSize,
//        }}
//     >
//       {isAurebesh ? aurebeshTranslator(data, scale, isWhite, isVertical) : data}
//     </div>
//   );
// }

// export default AurebeshTranslatorComponent;

