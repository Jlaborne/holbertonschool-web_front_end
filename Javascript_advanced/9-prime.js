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

  const primeCount = countPrimeNumbers(); // Call the function to count primes

  const endTime = performance.now(); // End time

  const executionTime = endTime - startTime; // Time taken to execute the function

  console.log(
    `Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`
  );
  console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
}

measureExecutionTime();
