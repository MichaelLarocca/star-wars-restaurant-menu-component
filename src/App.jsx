// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import stylesAurebesh from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import starWarsImage from "./components/AurebeshTranslatorComponent/StarWars.png";

function App() {
  return (
    <>
      <h1>Aurebesh Translator</h1>

      <div className="App">
        <h1>Aurebesh Translator</h1>
        <AurebeshTranslatorComponent
          text="$ ahsoka tano"
          scale={0.8}
          isWhite={false}
        />
      </div>

      {/* <div
        className={stylesAurebesh.a}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-8px -145px",
        }}
      >
        a
      </div>
      <div
        className={stylesAurebesh.b}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-62px -145px",
        }}
      >
        b
      </div>
      <div
        className={stylesAurebesh.c}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-115px -145px",
        }}
      >
        c
      </div>
      <div
        className={stylesAurebesh.Tt}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-323px -405px",
        }}
      >
        Tt
      </div> */}
    </>
  );
}

export default App;
