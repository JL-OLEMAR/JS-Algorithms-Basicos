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
