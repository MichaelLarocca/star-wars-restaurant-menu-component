import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";

const AurebeshTranslatorComponent = ({
  text,
  scale = 1,
  isWhite = false,
  ...rest
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {aurebeshTranslator(text, scale, isWhite)}
    </div>
  );
};

export default AurebeshTranslatorComponent;
