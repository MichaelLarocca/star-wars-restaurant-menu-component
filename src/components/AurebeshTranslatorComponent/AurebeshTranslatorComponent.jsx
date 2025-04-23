import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";
import cssFile from "../AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

function AurebeshTranslatorComponent({
  data,
  isAurebesh = true,
  scale = 1,
  isWhite = false,
  isVertical = false,
  verticalLetterSpacing = "-7px",
  horizontalLetterSpacing = "10px",
  fontSize = "16px"
  
}) {
  return (
    <div
      className={`${cssFile.aurebeshTranslator} ${isVertical && !isAurebesh ? cssFile.verticalText : ""}`}
      style={{ 
        display: isVertical ? "block" : "flex", 
        alignItems: "center",
        letterSpacing: isVertical ? verticalLetterSpacing : horizontalLetterSpacing,
        fontSize: fontSize,
       }}
    >
      {isAurebesh ? aurebeshTranslator(data, scale, isWhite, isVertical) : data}
    </div>
  );
}

export default AurebeshTranslatorComponent;
