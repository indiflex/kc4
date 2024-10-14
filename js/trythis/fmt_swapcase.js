const assert = require('assert');

const fmt = ([label, unit], price) =>
  `${label}${price.toLocaleString().padStart(9)}${unit}`;

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}냥`);

// function fmt([label, unit], price) {
//   return `${label}${price.toLocaleString().padStart(9)}${unit}`;
// }

// -----------------------
function upperToLowerX(str) {
  // return str.replace(/([A-Z])/g, '*$1*-');
  return str.replace(/[A-Z]/g, matchedStr => {
    return `*${matchedStr.toLowerCase()}*-`;
  });
}

const upperToLower = str =>
  str.replace(/[A-Z]/g, matchedStr => `*${matchedStr.toLowerCase()}*-`);

assert.strictEqual(
  upperToLower('Senior Coding Learning JS'),
  '*s*-enior *c*-oding *l*-earning *j*-*s*-'
);

// --------------------
const swapCase = str =>
  str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });
// console.log('🚀  swapCase:', swapCase('Senior Coding LEArning JS'));

assert.equal(
  swapCase('Senior Coding Learning JS'),
  'sENIOR cODING lEARNING js'
);
assert.equal(swapCase('Hanaro 4 Class'), 'hANARO 4 cLASS');
assert.equal(swapCase('HeLLo WoRLd'), 'hEllO wOrlD');
