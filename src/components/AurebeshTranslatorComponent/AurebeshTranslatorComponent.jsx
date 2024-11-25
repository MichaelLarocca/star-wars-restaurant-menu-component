import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";
// import cssFile from "./AurebeshTranslatorComponent.module.css";
import cssFile from "../AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

function AurebeshTranslatorComponent({
  data,
  scale = 1,
  isWhite = false,
  isVertical = false,
  isAurebesh = true,
}) {
  const [vertical, setVertical] = useState(isVertical);
  const [aurebesh, setAurebesh] = useState(isAurebesh);

  return (
    <div
      style={{ display: vertical ? "block" : "flex", alignItems: "center" }}
      className={vertical && !isAurebesh ? cssFile.verticalText : ""}
    >
      {aurebesh ? aurebeshTranslator(data, scale, isWhite, vertical) : data}
    </div>
  );
}

export default AurebeshTranslatorComponent;
