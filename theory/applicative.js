const apSet = (fns, arr) => {
  const result = new Set();
  for (const fn of fns) {
    for (const a of arr) {
      result.add(fn(a));
    }
  }
  return result;
};

const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

const fns = new Set([double, addOne, square]);
const numbers = new Set([1, 2, 3, 4]);
const result = apSet(fns, numbers); // Set(9) { 2, 4, 6, 8, 3, 5, 1, 9, 16 }
console.log(result);
