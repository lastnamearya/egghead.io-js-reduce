// Problem ~ Using reduce return an array with all the cast members and only include one star once.

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
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
      "Morgan Freeman"
    ]
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
      "Michael Caine"
    ]
  }
];

const result = input.reduce(function(accumulator, currentValue) {
  currentValue.cast.forEach(star => {
    if (accumulator.indexOf(star) === -1) {
      accumulator.push(star);
    }
  });
  return accumulator;
}, []);

console.log(result);
