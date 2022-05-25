// Solution1 (Iterative)
function palindrome(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str.trim() === reversed.trim();
}

palindrome('racecar');


// Solution2
function palindrome(str) {
  return str.trim().split('').reverse().join('') === str.trim();
}

palindrome('racecar');