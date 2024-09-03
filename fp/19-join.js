function sentensify(str) {
  // Only change code below this line
  const spliter = str.split(/\W+/)
  const arr = spliter.join(" ")
  console.log(arr)
  return arr

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
