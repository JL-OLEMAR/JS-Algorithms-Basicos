// First Solution (Iterative)
function deleteRepeat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

deleteRepeat([1, 1, 2, 3, 3, 3, 4, 5]);

// Second Solution with Set
function deleteRepeat(arr) {
  return [...new Set(arr)];
}

deleteRepeat([1, 1, 2, 3, 3, 3, 4, 5, 4, 7]);
