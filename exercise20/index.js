// First Solution (Filter)
function moveZeros(arr) {
  const arrNonZeros = arr.filter((element) => element !== 0);
  const zeros = new Array(arr.length - arrNonZeros.length).fill(0);

  return arrNonZeros.concat(zeros);
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]

// Second Solution (Reduce)
function moveZeros(arr) {
  const [nonZeros, zeros] = arr.reduce(
    ([nonZeros, zeros], element) => {
      if (element === 0) {
        return [nonZeros, [...zeros, element]];
      } else {
        return [[...nonZeros, element], zeros];
      }
    },
    [[], []]
  );

  return nonZeros.concat(zeros);
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
