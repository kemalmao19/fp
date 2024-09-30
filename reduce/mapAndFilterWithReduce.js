const data = [1, 2, 3];
const doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);

  return acc;
}, []);

const doubleMapped = data.map(function(item) {
  return item * 2;
});

const data2 = [1, 2, 3, 4, 5, 6];
const evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }

  return acc;
}, []);

const evenFiltered = data2.filter(function(item) {
  return item % 2 === 0;
});

const filterMapped = data2
  .filter(function(value) {
    return value % 2 === 0;
  })
  .map(function(value) {
    return value * 2;
  });

let bigData = [];
for (let i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

const filterBegin = Date.now();
const filterMappedBigData = bigData
  .filter(function(value) {
    return value % 2 === 0;
  })
  .map(function(value) {
    return value * 2;
  });
const filterEnd = Date.now();
const filtertimeSpent = (filterEnd - filterBegin) / 1000 + "secs";

const reducedBegin = Date.now();
const reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
const reducedEnd = Date.now();
const reducedtimeSpent = (reducedEnd - reducedBegin) / 1000 + " secs";

console.log("filtered Big Data:", filtertimeSpent);
console.log("reduced Big Data:", reducedtimeSpent);
