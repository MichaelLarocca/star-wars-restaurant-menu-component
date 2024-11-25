import "./App.css";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";

function App() {
  return (
    <>
      <h1>Aurebesh Translator</h1>
      <AurebeshTranslatorComponent
        data={`luke skywalker `}
        scale={1}
        isWhite={false}
        isVertical={true}
        isAurebesh={true}
      />
      <AurebeshTranslatorComponent
        data={`may the force be with you`}
        scale={0.5}
        isWhite={false}
        isVertical={false}
        isAurebesh={true}
      />
    </>
  );
}

export default App;
