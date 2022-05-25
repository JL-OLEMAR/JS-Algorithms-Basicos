// Filter distinct numbers from two arrays.
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [2, 4, 5, 6, 8];

function distinctNumbers(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}

distinctNumbers(numbers1, numbers2);
