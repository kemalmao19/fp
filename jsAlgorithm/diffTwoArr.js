/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */

const diffArray = (arr1, arr2) => {
  const newArr1 = arr1.filter(x=>!arr2.includes(x))
  const newArr2 = arr2.filter(x=>!arr1.includes(x))
  const res = [...newArr1, ...newArr2]
  return res
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
