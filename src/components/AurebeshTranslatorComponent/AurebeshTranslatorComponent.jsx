import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";

const AurebeshTranslatorComponent = ({
  text,
  scale = 1,
  isWhite = false,
  ...rest
}) => {
  return (
    <div>
      <h3>Aurebesh Translator</h3>
      {aurebeshTranslator(text, scale, isWhite)}
    </div>
  );
};

export default AurebeshTranslatorComponent;
