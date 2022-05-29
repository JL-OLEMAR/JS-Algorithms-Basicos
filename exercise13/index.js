// First Solution (Iterative)
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

getCount('abracadabra');
getCount('murcielago');


// Second Solution (With Reduce)
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .reduce(
      (vowelsCount, word) =>
        vowels.includes(word) ? vowelsCount + 1 : vowelsCount,
      0
    );
}

getCount('abracadabra');
getCount('murcielago');
