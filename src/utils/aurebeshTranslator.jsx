import imageAurebesh from "../components/AurebeshTranslatorComponent/StarWars.png";
import cssFile from "../components/AurebeshTranslatorComponent/AurebeshTranslatorComponent.module.css";

// Mapping of English letters to Aurebesh CSS classes and background positions
const aurebeshMap = {
  A: { class: "A", position: "-10px -15px" },
  B: { class: "B", position: "-62px -15px" },
  C: { class: "C", position: "-115px -15px" },
  D: { class: "D", position: "-167px -15px" },
  E: { class: "E", position: "-218px -15px" },
  F: { class: "F", position: "-271px -15px" },
  G: { class: "G", position: "-323px -15px" },
  H: { class: "H", position: "-375px -15px" },
  I: { class: "I", position: "-425px -15px" },
  J: { class: "J", position: "-481px -15px" },
  K: { class: "K", position: "-533px -15px" },
  L: { class: "L", position: "-583px -15px" },
  M: { class: "M", position: "-637px -15px" },
  N: { class: "N", position: "-10px -70px" },
  O: { class: "O", position: "-62px -70px" },
  P: { class: "P", position: "-114px -70px" },
  Q: { class: "Q", position: "-167px -72px" },
  R: { class: "R", position: "-218px -70px" },
  S: { class: "S", position: "-270px -70px" },
  T: { class: "T", position: "-323px -70px" },
  U: { class: "U", position: "-375px -70px" },
  V: { class: "V", position: "-428px -70px" },
  W: { class: "W", position: "-480px -70px" },
  X: { class: "X", position: "-533px -70px" },
  Y: { class: "Y", position: "-585px -70px" },
  Z: { class: "Z", position: "-637px -70px" },
  a: { class: "a", position: "-8px -145px" },
  b: { class: "b", position: "-62px -145px" },
  c: { class: "c", position: "-115px -145px" },
  d: { class: "d", position: "-165px -145px" },
  e: { class: "e", position: "-219px -145px" },
  f: { class: "f", position: "-271px -145px" },
  g: { class: "g", position: "-322px -145px" },
  h: { class: "h", position: "-375px -145px" },
  i: { class: "i", position: "-430px -145px" },
  j: { class: "j", position: "-480px -145px" },
  k: { class: "k", position: "-533px -145px" },
  l: { class: "l", position: "-587px -145px" },
  m: { class: "m", position: "-638px -145px" },
  n: { class: "n", position: "-10px -200px" },
  o: { class: "o", position: "-62px -200px" },
  p: { class: "p", position: "-115px -200px" },
  q: { class: "q", position: "-165px -201px" },
  r: { class: "r", position: "-218px -200px" },
  s: { class: "s", position: "-271px -200px" },
  t: { class: "t", position: "-323px -200px" },
  u: { class: "u", position: "-375px -200px" },
  v: { class: "v", position: "-428px -200px" },
  w: { class: "w", position: "-480px -200px" },
  x: { class: "x", position: "-533px -200px" },
  y: { class: "y", position: "-585px -200px" },
  z: { class: "z", position: "-637px -200px" },
  0: { class: "zero", position: "-10px -275px" },
  1: { class: "one", position: "-60px -275px" },
  2: { class: "two", position: "-113px -275px" },
  3: { class: "three", position: "-165px -275px" },
  4: { class: "four", position: "-219px -275px" },
  5: { class: "five", position: "-270px -275px" },
  6: { class: "six", position: "-323px -275px" },
  7: { class: "seven", position: "-375px -275px" },
  8: { class: "eight", position: "-428px -275px" },
  9: { class: "nine", position: "-480px -275px" },
  ".": { class: "period", position: "-10px -350px" },
  ",": { class: "comma", position: "-62px -350px" },
  ";": { class: "semicolon", position: "-114px -350px" },
  ":": { class: "colon", position: "-165px -350px" },
  "@": { class: "at", position: "-218px -350px" },
  "#": { class: "pound", position: "-271px -350px" },
  "'": { class: "apostrophe", position: "-324px -348px" },
  "!": { class: "exclamation-point", position: "-375px -350px" },
  "": { class: "", position: "" },
  '"': { class: "double-quote", position: "-425px -350px" },
  "/": { class: "forward-slash", position: "-480px -350px" },
  "?": { class: "question-mark", position: "-532px -350px" },
  "<": { class: "less-than", position: "-585px -350px" },
  ">": { class: "greater-than", position: "-637px -350px" },
  "%": { class: "percent-sign", position: "-10px -405px" },
  "&": { class: "ampersand", position: "-62px -405px" },
  "*": { class: "asterisk", position: "-115px -405px" },
  "(": { class: "opening-parenthesis", position: "-165px -405px" },
  ")": { class: "closing-parenthesis", position: "-220px -405px" },
  "[": { class: "box", position: "-271px -405px" },
  "]": { class: "box", position: "-271px -405px" },
  $: { class: "credit", position: "-323px -405px" },
  " ": { class: "space", position: "-374px -405px" },
};

// Function to calculate margin based on scale
function calculateMargin(scale, isSpace) {
  if (scale <= 0.5) {
    return isSpace ? "-10px" : "-5px";
  } else if (scale <= 1) {
    return isSpace
      ? `${-10 + ((scale - 0.5) / 0.5) * 5}px`
      : `${-5 + ((scale - 0.5) / 0.5) * 5}px`;
  } else if (scale <= 1.5) {
    return isSpace
      ? `${-5 + ((scale - 1) / 0.5) * 5}px`
      : `${0 + ((scale - 1) / 0.5) * 5}px`;
  } else if (scale <= 2) {
    return isSpace
      ? `${0 + ((scale - 1.5) / 0.5) * 5}px`
      : `${5 + ((scale - 1.5) / 0.5) * 5}px`;
  } else {
    return isSpace ? "5px" : "10px";
  }
}

// Function to calculate vertical margin based on scale
function calculateVerticalMargin(scale, isSpace) {
  if (scale <= 0.5) {
    return isSpace ? "-20px" : "-15px";
  } else if (scale <= 1) {
    return isSpace
      ? `${-20 + ((scale - 0.5) / 0.5) * 15}px`
      : `${-15 + ((scale - 0.5) / 0.5) * 15}px`;
  } else if (scale <= 1.5) {
    return isSpace
      ? `${-5 + ((scale - 1) / 0.5) * 15}px`
      : `${0 + ((scale - 1) / 0.5) * 15}px`;
  } else if (scale <= 2) {
    return isSpace
      ? `${0 + ((scale - 1.5) / 0.5) * 20}px` // Increased for scale 2
      : `${5 + ((scale - 1.5) / 0.5) * 20}px`; // Increased for scale 2
  } else {
    return isSpace ? "20px" : "25px"; // Further increased base values
  }
}

// Function to translate text to Aurebesh
export function aurebeshTranslator(
  text,
  scale = 1,
  isWhite = false,
  isVertical = false
) {
  return text.split("").map((char, index) => {
    const { class: aurebeshClass, position } = aurebeshMap[char] || {};
    if (!aurebeshClass) {
      console.warn(`Character "${char}" not found in aurebeshMap.`);
      return null;
    }
    return (
      <div
        key={index}
        className={cssFile[aurebeshClass]}
        style={{
          width: "30px",
          height: "30px",
          transform: `scale(${scale})`,
          filter: isWhite ? "invert(100%)" : "invert(0%)",
          display: isVertical ? "block" : "inline-block",
          backgroundImage: `url(${imageAurebesh})`,
          backgroundPosition: position,
          marginRight: calculateMargin(scale, aurebeshClass === "space"),
          marginLeft: calculateMargin(scale, aurebeshClass === "space"),
          marginTop: isVertical
            ? calculateVerticalMargin(scale, aurebeshClass === "space")
            : "0px",
          marginBottom: isVertical
            ? calculateVerticalMargin(scale, aurebeshClass === "space")
            : "0px",
        }}
      />
    );
  });
}
