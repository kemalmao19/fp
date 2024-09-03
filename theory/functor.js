const Functors = (value) => {
  const state = {
    value: value,
  };
  const map = (fn) => Functors(fn(value));
  return { ...state, map };
};

const plus = (x, y) => x + y;

const WithPlus = Functors(5); // { value: 5, map: [Function: map] }
const res = WithPlus.map((val) => plus(val, 3)); // { value: 8, map: [Function: map] }
const rawFunctor = Functors;
const result = rawFunctor(5).map((val) => plus(val, 3)); // { value: 8, map: [Function: map] }

console.log(WithPlus);
console.log(res);
console.log(result);
