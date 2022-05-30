function howManyTimes(phrase) {
  let arrayWords = phrase.split(' ');
  let result = {};

  arrayWords.forEach((word) => {
    result[word] ? result[word]++ : (result[word] = 1);
  });
  return result;
}

howManyTimes('hola hola hola hola jose'); // { hola: 4, jose: 1 }
