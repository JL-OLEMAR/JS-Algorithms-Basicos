// First Solution (Iterative)
function fibonacci(num) {
  let fibonacciArray = [0, 1];
  
  if (num <= 2) return 1
  for (let i = 2; i <= num; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]
  }
  
  return fibonacciArray[num]
};

fibonacci(10); // 55

// Second Solution (Recursive)
function fibonacci(num) {
  if (num <= 2) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
};

fibonacci(10); // 55