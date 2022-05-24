const string = 'This is a JavaScript string';

function reverse(text) {
  return text.split(' ').reverse().join(' ');
}

reverse(string)