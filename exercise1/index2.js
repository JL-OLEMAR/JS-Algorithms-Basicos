// Limit by number of words.

const string = 'This is a JavaScript string bla bla bla';
const LIMIT_WORDS = 3;

function reverse(text, limit) {
  return text.split(' ', limit).reverse().join(' ');
}

reverse(string, LIMIT_WORDS);