const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const res = [...arr]
  return res.sort((a,b)=>a-b)

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray)
