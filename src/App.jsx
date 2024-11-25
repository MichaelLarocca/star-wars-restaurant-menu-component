import "./App.css";
// import stylesAurebesh from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
// import starWarsImage from "./components/AurebeshTranslatorComponent/StarWars.png";

function App() {
	return (
		<>
			<h1>Aurebesh Translator</h1>
			<div className="App">
				<AurebeshTranslatorComponent
					text={`obi wan cannoli: $4.99`}
					scale={0.5}
					isWhite={false}
					isVertical={false}
				/>
			</div>
			<div className="App">
				<AurebeshTranslatorComponent
					text={`caff: $1`}
					scale={0.5}
					isWhite={false}
					isVertical={false}
				/>
			</div>
		</>
	);
}

export default App;
