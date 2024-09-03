Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

console.log([1, 2, 3, 4].myFilter(x => x < 3))
// [1, 2]
