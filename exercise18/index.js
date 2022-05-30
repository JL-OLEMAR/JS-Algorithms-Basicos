function findUniq(arr) {
  return arr.find((number) => arr.indexOf(number) === arr.lastIndexOf(number));
}

findUniq([1, 1, 1, 2, 1, 1]); // => 2
findUniq([0, 0, 0.55, 0, 0]); // => 0.55
