function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  vowelsCount = str.split('').filter((v) => vowels.includes(v)).length;
  return vowelsCount++;
}

getCount('abracadabra'); // === 5
getCount(''); // === 0
getCount(' '); // === 0
getCount('a'); // === 1
