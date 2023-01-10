export function max(a: number, b: number) {
  return a - (((a - b) - Math.abs(a - b)) / 2)
}

export function min(a: number, b: number) {
  return a - (((a - b) + Math.abs(a - b)) / 2)
}

export function isPrime(num: number) {
  if (num < 2 || (num > 2 && num % 2 === 0)) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export function factors(n: number) : number[] {
  if (Math.abs(n) === 1) return [1, n]
  const a = [1, n, -1, -n]
  for (let i of this.range(2,  Math.floor(Math.sqrt(Math.abs(n))) + 1)) {
    if (n % i === 0) {
      a.push(i, n/i, -i, -n/i)
    }
  }
  return a
}

export function random(a: number, b: number) {
  return Math.random() * (max(a, b) - min(a, b)) + min(a, b)
}