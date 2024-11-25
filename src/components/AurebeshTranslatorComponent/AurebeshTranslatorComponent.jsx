import { useState } from "react";
import { aurebeshTranslator } from "../../utils/aurebeshTranslator.jsx";

function AurebeshTranslatorComponent({
	text,
	scale = 1,
	isWhite = false,
	isVertical = false,
	isAurebesh = true,
	...rest
}) {
	const [vertical, setVertical] = useState(isVertical);
	const [aurebesh, setAurebesh] = useState(isAurebesh);

	return (
		<div style={{ display: vertical ? "block" : "flex", alignItems: "center" }}>
			{aurebesh ? aurebeshTranslator(text, scale, isWhite, vertical) : text}
		</div>
	);
}

export default AurebeshTranslatorComponent;
