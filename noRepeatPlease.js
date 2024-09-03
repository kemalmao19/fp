function permAlone(str) {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const generatePermutations = (arr, n) => {
    if (n === 1) {
      const isValid = arr.every((char, index) => index === 0 || char !== arr[index - 1]);
      return isValid ? 1 : 0;
    }

    let count = 0;

    for (let i = 0; i < n; i++) {
      swap(arr, i, n - 1);
      count += generatePermutations([...arr], n - 1);
      swap(arr, i, n - 1);
    }

    return count;
  };

  return generatePermutations([...str], str.length);
}
console.log(permAlone('aab'));
