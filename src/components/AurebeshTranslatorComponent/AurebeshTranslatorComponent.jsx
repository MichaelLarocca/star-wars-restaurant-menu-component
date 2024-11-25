import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";

function AurebeshTranslatorComponent({
	text,
	scale = 1,
	isWhite = false,
	isVertical = false,
	...rest
}) {
	const [vertical, setVertical] = useState(isVertical);

	return (
		<div style={{ display: vertical ? "block" : "flex", alignItems: "center" }}>
			{aurebeshTranslator(text, scale, isWhite, vertical)}
		</div>
	);
}

export default AurebeshTranslatorComponent;
