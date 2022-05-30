// How many times a word is repeated in a sentence and return the sum of all the repetitions

function howManyTimesByWord(phrase, word) {
  let count = 0;
  let words = phrase.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return count;
}

howManyTimesByWord('Hello Hello Hello How are you?', 'Hello'); // 3
