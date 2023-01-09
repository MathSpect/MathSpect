export function isPrime(number) {
  if (number < 2 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
