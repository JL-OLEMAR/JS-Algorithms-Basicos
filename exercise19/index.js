// First Solution (Iterative)
function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') count++;
    if (parens[i] === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}

validParentheses('()'); // => true
validParentheses(')(()))'); // => false
validParentheses('('); // => false
validParentheses('(())((()())())'); // => true

// Second Solution (Recursive)
function validParentheses(parens) {
  if (parens === '') return true;
  const replaced = parens.replace(/\(\)/ig, '');
  
  if (replaced === parens) return false;
  return validParentheses(replaced);
}

validParentheses('()'); // => true
validParentheses(')(()))'); // => false
validParentheses('('); // => false
validParentheses('(())((()())())'); // => true
