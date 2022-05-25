function breakCamelCase(str) {
  return str.replace(/([A-Z])/g, ' $1');
}

breakCamelCase('CamelCase');