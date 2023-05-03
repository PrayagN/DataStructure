function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function printFibonacci(n, i=0) {
    if (i < n) {
      console.log(fibonacci(i));
      printFibonacci(n, i+1);
    }
  }
  
  function printFibonacciSequence(n) {
    printFibonacci(n);
  }
  
  // Example: print out the first 10 numbers in the Fibonacci sequence
  printFibonacciSequence(10);
  