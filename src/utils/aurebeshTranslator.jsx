import image from "../components/AurebeshTranslatorComponent/StarWars.png";
import cssFile from "../components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

// Mapping of English letters to Aurebesh CSS classes
const aurebeshMap = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  " ": "space",
  $: "dollar", // Add a class for the dollar sign if needed
};

// Function to translate text to Aurebesh
export function aurebeshTranslator(text, scale = 1, isWhite = false) {
  return text.split("").map((char, index) => {
    const aurebeshClass = aurebeshMap[char] || "";
    return (
      <div
        key={index}
        className={`${cssFile["image-1"]} ${aurebeshClass}`}
        style={{
          transform: `scale(${scale})`,
          filter: isWhite ? "invert(100%)" : "invert(0%)",
        }}
      >
        <img width="1" height="1" src={image} alt="" />
      </div>
    );
  });
}
