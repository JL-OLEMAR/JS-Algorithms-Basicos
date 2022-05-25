function extractDomainName(url) {
  //return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').replace(/\/.*/, ''); // with .com
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').replace(/\..*$/, ''); // without .com
}

extractDomainName("https://github.com/PepitoFake/exercisesFake")
extractDomainName("https://www.google.com")
extractDomainName("https://www.youtube.com")
extractDomainName('https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript');