// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";
import AurebeshTranslatorComponent from "./components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.jsx";
import starWarsImage from "./components/AurebeshTranslatorComponent/StarWars.png";

function App() {
  return (
    <>
      <h1>Aurebesh Translator</h1>
      {/* <AurebeshTranslatorComponent
        text="Hello, World!"
        scale={1.2}
        isWhite={true}
      /> */}

      <div
        className={styles.a}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-8px -145px",
        }}
      >
        a
      </div>
      <div
        className={styles.b}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-62px -145px",
        }}
      >
        b
      </div>
      <div
        className={styles.c}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-115px -145px",
        }}
      >
        c
      </div>
      <div
        className={styles.Tt}
        style={{
          backgroundImage: `url(${starWarsImage})`,
          backgroundPosition: "-323px -405px",
        }}
      >
        Tt
      </div>
    </>
  );
}

export default App;
