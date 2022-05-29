function numberToPower(number, power) {
  if (power === 0) return 1;
  
  let result = number;
  for (let i = power; i > 1; i--) {
    result *= number;
  }

  return result;
}

numberToPower(3, 2);
numberToPower(2, 3);
numberToPower(10, 6);
