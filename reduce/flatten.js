const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flattenedData = data.reduce((acc, value) => {
  return acc.concat(value);
}, []);

const input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy",
    ],
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine",
    ],
  },
];

const stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);

const data2 = [1, 2, 3, 4, "5"];
const sum = data2.reduceRight(function(acc, value, index) {
  console.log(`Index: ${index}`);
  return acc + value;
}, 0);

console.log("Sum: ", sum);
