function countPrimeNumbers() {
  function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Divisible by i, not a prime
    }
    return true;
  }

  let primeCount = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  return primeCount;
}

function measureExecutionTime() {
  const startTime = performance.now(); // Start time

  let count = 0;

  // Function to execute countPrimeNumbers asynchronously 100 times
  function executeAsync() {
    // Defer execution using setTimeout
    setTimeout(() => {
      countPrimeNumbers(); // Execute the function
      count++;

      // If we have executed 100 times, log the execution time
      if (count === 100) {
        const endTime = performance.now(); // End time
        const executionTime = endTime - startTime; // Time taken to execute the function 100 times
        console.log(
          `Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`
        );
      } else {
        // Continue executing the function asynchronously
        executeAsync();
      }
    }, 0);
  }

  // Start the execution
  executeAsync();
}

measureExecutionTime();
