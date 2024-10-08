const Functor = (value) => {
  const state = {
    value: value,
  };
  const map = (fn) => Functor(fn(state.value));
  return { ...state, map };
};

const plus = (x, y) => x + y;

const WithPlus = Functor(5); // { value: 5, map: [Function: map] }
const res = WithPlus.map((val) => plus(val, 3)); // { value: 8, map: [Function: map] }
const result = Functor("Hello").map((val) => plus(val, " World")); // { value: 'Hello World', map: [Function: map] }

console.log(WithPlus);
console.log(res);
console.log(result);
