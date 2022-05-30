// internationalization of numbers
const num = 30.2722;
const lang = 'en-EN';

new Intl.NumberFormat(lang).format(num);
