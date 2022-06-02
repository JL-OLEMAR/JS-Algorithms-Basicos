function pigIt(str) {
  return str
    .split(' ')
    .map((word) => word.match(/[a-zA-Z]/g) ? `${word.slice(1)}${word.charAt(0)}ay` : word)
    .join(' ');
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
