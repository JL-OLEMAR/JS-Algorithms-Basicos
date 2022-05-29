function findShort(word) {
  const wordsLength = word.split(' ').map((word) => word.length);
  return Math.min(...wordsLength);
}

findShort('bitcoin take over the world maybe who knows perhaps'); // 3
