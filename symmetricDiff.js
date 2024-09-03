const symDiffOfTwo = (arr1, arr2) => {
  const uniqueArr1 = arr1.filter((value) => !arr2.includes(value));
  const uniqueArr2 = arr2.filter((value) => !arr1.includes(value));

  return [...uniqueArr1, ...uniqueArr2];
};

function sym() {
  const args = [...arguments];

  // Calculate symmetric difference for each pair of arrays
  const result = args.reduce((acc, curr) => symDiffOfTwo(acc, curr), []);

  // Remove duplicate values from the result
  return [...new Set(result)];
}

// Example usage:
const result = sym([1, 2, 3, 4], [3, 4, 5, 6], [5, 6, 7, 8]);
console.log(result); // Output: [1, 2, 7, 8]
