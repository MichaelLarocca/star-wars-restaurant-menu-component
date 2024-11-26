import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";
import cssFile from "../AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

function AurebeshTranslatorComponent({
  data,
  scale = 1,
  isWhite = false,
  isVertical = false,
  isAurebesh = true,
}) {
  return (
    <div
      style={{ display: isVertical ? "block" : "flex", alignItems: "center" }}
      className={isVertical && !isAurebesh ? cssFile.verticalText : ""}
    >
      {isAurebesh ? aurebeshTranslator(data, scale, isWhite, isVertical) : data}
    </div>
  );
}

export default AurebeshTranslatorComponent;
