function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 2;
}

const initial_value = 1;

const pipeline = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve,
];

const final_value = pipeline.reduce((acc, fn) => fn(acc), initial_value);

const reversed = pipeline.reduceRight((acc, fn) => fn(acc), initial_value);

console.log("final_value: ", final_value);
console.log("reversed: ", reversed);
