// Problem ~ Using reduce return an array with all the cast members and only include one star once.

const data = [
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

const result = data.reduce(function(accumulator, currentValue) {
  currentValue.cast.forEach(star => {
    // if idexOf === -1, It means star is not included in the array itself.
    if (accumulator.indexOf(star) === -1) {
      accumulator.push(star);
    }
    // No else here ~ because we're only going to add those stars which are not inluded in the accumulator.
  });
  return accumulator;
}, []);

console.log(result);
