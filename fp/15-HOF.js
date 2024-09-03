const squareList = arr => {
  // Only change code below this line
  const isInteger = x => Number.isInteger(x);
  const predicate = x => x > 0 && isInteger(x)
  const square = x => x**2
  const filterArr = arr.filter(predicate)
  const res = filterArr.map(square)
  return res
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
