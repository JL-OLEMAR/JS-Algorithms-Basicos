const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const lang = 'en';

// Common way
const connector = lang === 'en' ? ' and ' : ' y ';
list
  .slice(0, -1)
  .join(', ')
  .concat(connector + list.slice(-1));

// internationalization: (Intl) way
new Intl.ListFormat(lang).format(list);
