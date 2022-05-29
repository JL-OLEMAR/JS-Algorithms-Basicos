// First Solution
function highAndLow(numbers) {
  const numbersArray = numbers.split(' ').map(Number);
  const numberMin = Math.min(...numbersArray);
  const numberMax = Math.max(...numbersArray);

  return `${numberMax} ${numberMin}`;
}

highAndLow('1 2 3 4 5'); // return "5 1"
highAndLow('1 2 -3 4 5'); // return "5 -3"
highAndLow('1 9 3 4 -5'); // return "9 -5"


// Second Solution
function highAndLow(numbers) {
  const numbersArray = numbers.split(' ').map(Number);
  const numberMaxMin = [Math.max(...numbersArray), Math.min(...numbersArray)];

  return numberMaxMin.join(' ');
}

highAndLow('1 2 3 4 5'); // return "5 1"
highAndLow('1 2 -3 4 5'); // return "5 -3"
highAndLow('1 9 3 4 -5'); // return "9 -5"

