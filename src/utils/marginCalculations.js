// Function to calculate horizontal margin based on scale
// Adjusts margin size depending on the scale and whether the character is a space
export function calculateMargin(scale, isSpace) {
  if (scale <= 0.5) {
    // For small scales, use negative margins to reduce spacing
    return isSpace ? "-10px" : "-5px";
  } else if (scale <= 1) {
    // Gradually increase margin as scale approaches 1
    return isSpace
      ? `${-10 + ((scale - 0.5) / 0.5) * 5}px`
      : `${-5 + ((scale - 0.5) / 0.5) * 5}px`;
  } else if (scale <= 1.5) {
    // Adjust margins for medium scales
    return isSpace
      ? `${-5 + ((scale - 1) / 0.5) * 5}px`
      : `${0 + ((scale - 1) / 0.5) * 5}px`;
  } else if (scale <= 2) {
    // Further adjust margins for larger scales
    return isSpace
      ? `${0 + ((scale - 1.5) / 0.5) * 5}px`
      : `${5 + ((scale - 1.5) / 0.5) * 5}px`;
  } else {
    // Default margins for scales greater than 2
    return isSpace ? "5px" : "10px";
  }
}

// Function to calculate vertical margin based on scale
// Similar to calculateMargin but for vertical spacing
export function calculateVerticalMargin(scale, isSpace) {
  if (scale <= 0.5) {
    // For small scales, use larger negative margins to reduce spacing
    return isSpace ? "-20px" : "-15px";
  } else if (scale <= 1) {
    // Gradually increase vertical margin as scale approaches 1
    return isSpace
      ? `${-20 + ((scale - 0.5) / 0.5) * 15}px`
      : `${-15 + ((scale - 0.5) / 0.5) * 15}px`;
  } else if (scale <= 1.5) {
    // Adjust vertical margins for medium scales
    return isSpace
      ? `${-5 + ((scale - 1) / 0.5) * 15}px`
      : `${0 + ((scale - 1) / 0.5) * 15}px`;
  } else if (scale <= 2) {
    // Further adjust vertical margins for larger scales
    return isSpace
      ? `${0 + ((scale - 1.5) / 0.5) * 20}px` // Increased for scale 2
      : `${5 + ((scale - 1.5) / 0.5) * 20}px`; // Increased for scale 2
  } else {
    // Default vertical margins for scales greater than 2
    return isSpace ? "20px" : "25px"; // Further increased base values
  }
}




// // Function to calculate margin based on scale
// export function calculateMargin(scale, isSpace) {
//   if (scale <= 0.5) {
//     return isSpace ? "-10px" : "-5px";
//   } else if (scale <= 1) {
//     return isSpace
//       ? `${-10 + ((scale - 0.5) / 0.5) * 5}px`
//       : `${-5 + ((scale - 0.5) / 0.5) * 5}px`;
//   } else if (scale <= 1.5) {
//     return isSpace
//       ? `${-5 + ((scale - 1) / 0.5) * 5}px`
//       : `${0 + ((scale - 1) / 0.5) * 5}px`;
//   } else if (scale <= 2) {
//     return isSpace
//       ? `${0 + ((scale - 1.5) / 0.5) * 5}px`
//       : `${5 + ((scale - 1.5) / 0.5) * 5}px`;
//   } else {
//     return isSpace ? "5px" : "10px";
//   }
// }

// // Function to calculate vertical margin based on scale
// export function calculateVerticalMargin(scale, isSpace) {
//   if (scale <= 0.5) {
//     return isSpace ? "-20px" : "-15px";
//   } else if (scale <= 1) {
//     return isSpace
//       ? `${-20 + ((scale - 0.5) / 0.5) * 15}px`
//       : `${-15 + ((scale - 0.5) / 0.5) * 15}px`;
//   } else if (scale <= 1.5) {
//     return isSpace
//       ? `${-5 + ((scale - 1) / 0.5) * 15}px`
//       : `${0 + ((scale - 1) / 0.5) * 15}px`;
//   } else if (scale <= 2) {
//     return isSpace
//       ? `${0 + ((scale - 1.5) / 0.5) * 20}px` // Increased for scale 2
//       : `${5 + ((scale - 1.5) / 0.5) * 20}px`; // Increased for scale 2
//   } else {
//     return isSpace ? "20px" : "25px"; // Further increased base values
//   }
// }
