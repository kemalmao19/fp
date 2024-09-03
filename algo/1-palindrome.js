function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  console.log(cleanStr);
  console.log(reversedStr);
  return cleanStr === reversedStr;
}
