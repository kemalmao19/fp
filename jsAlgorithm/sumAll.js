/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

// function sumAll(arr) {
//   const sorted = arr.sort((a, b) => a - b);
//   let res = 0;
//   for (let i = sorted[0]; i <= sorted[1]; i++) {
//     res += i;
//   }
//   return res;
// }

// use recursion
const sumAll = arr => {
   const sorted = arr.sort((a, b) => a - b);
   if (sorted[0]===sorted[1]){
    return sorted[0]
   } else {
    return sorted[0] + sumAll([sorted[0]+1, sorted[1]])
   }   
}

console.log(sumAll([1, 4]));
