// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// https://www.youtube.com/watch?v=6zNaRiU4uL8

function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    return str.toLowerCase().split(/\s+|_+/).join('-');
  }
  
console.log(spinalCase('The_Andy_Griffith_Show'));