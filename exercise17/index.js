// First Solution (Iteration)
function findOutlier(integers) {
  const even = [];
  const odd = [];

  for (const number of integers) {
    number % 2 === 0 ? even.push(number) : odd.push(number);
  }

  return even.length === 1 ? even[0] : odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // 11 odd
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // 160 even

// Second Solution (Reduce)
function findOutlier(integers) {
  const { even, odd } = integers.reduce(
    ({ even, odd }, number) =>
      number % 2 === 0
        ? { even: [...even, number], odd }
        : { even, odd: [...odd, number] },
    { even: [], odd: [] }
  );

  return even.length === 1 ? even[0] : odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // 11 odd
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // 160 even

// Tertiary Solution (Filters)
function findOutlier(integers) {
  const even = integers.filter((number) => number % 2 === 0);
  const odd = integers.filter((number) => number % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // 11 odd
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // 160 even
