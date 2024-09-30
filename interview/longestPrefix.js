const wordX = ["testFight", "testRun", "test", "anotherTest", "testa"];
const wordY = ["flight", "flower", "flow"];

// expectation fn(wordX) => ""
// expectation fn(wordY) => "fl"

/*
  stategy / approach
  iterate each word from array
  acc = word[i] dengan curr = word[i+1]
  fn => acc[i] === curr[i] "flight"[0] === "flower"[0] === f === f || [i] !== minimum length
  if true, lanjut iterasi (index+1)
  else return acc.slice(0, i)
 */

// prefixHelper :: (string, string) -> string
const prefixHelper = (acc, curr) => {
  const minLength = Math.min(acc.length, curr.length);

  //test case 1
  // [0] : testFight + testRun => test
  // [1] : test + test => test
  // [2] : test + anotherTest => "", terminate due to test[index] !== anotherTest[index]

  // test case 2
  // [0] acc : flight + flower => fl
  // [1] acc : fl + flow => fl
  // [2] acc: fl + _ => fl, terminate due to minLength === index

  // compare :: int => string
  const compare = (index) => {
    if (index === minLength || acc[index] !== curr[index]) {
      return acc.slice(0, index);
    }
    return compare(index + 1);
  };

  return compare(0); // Start comparison from index 0
};

// longestCommonPrefix :: [string] -> string
const longestCommonPrefix = (input) => {
  if (input.length === 0) return "";

  // Reduce the array to find the longest common prefix using prefixHelper
  return input.reduce((acc, curr) =>
    acc === "" ? "" : prefixHelper(acc, curr),
  );
};

console.log(longestCommonPrefix(wordX)); // ""
console.log(longestCommonPrefix(wordY)); // "fl"
