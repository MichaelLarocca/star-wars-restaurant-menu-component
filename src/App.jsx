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
          text={`ahsoka tano `}
          scale={1.5}
          isWhite={true}
          isVertical={true}
          isAurebesh={true}
        />
      </div>
      <div className="App">
        <AurebeshTranslatorComponent
          text={`may the force be with you`}
          scale={1}
          isWhite={true}
          isVertical={false}
          isAurebesh={true}
        />
      </div>
    </>
  );
}

export default App;
