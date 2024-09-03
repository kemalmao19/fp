function checkPositive(arr) {
  // Only change code below this line
  const predicate = x => x > 0;
  const res = arr.every(predicate)
  console.log(res)
  return res
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
