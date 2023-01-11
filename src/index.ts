export function max(a: number, b: number): number {
  return a - (((a - b) - Math.abs(a - b)) / 2)
}

export function min(a: number, b: number): number {
  return a - (((a - b) + Math.abs(a - b)) / 2)
}

export function range(start: number, end: number, step?: number): number[] {
  if (!step) step = 1
  const list: Array<number> = []
  for (let i = start; i < end; i += step) {
    list.push(i)
  }
  return list
}

export function isPrime(n: number): boolean {
  if (n < 2 || (n > 2 && n % 2 === 0)) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export function isInt(n: number): boolean {
  return n / Math.round(n) === 1
}

export function factors(n: number): number[][] {
  if (n === 0) return [[]]
  if (Math.abs(n) === 1) return [[1, n]]
  const a = [[1, n], [-1, -n]]
  for (let i of range(2, Math.floor(Math.sqrt(Math.abs(n))) + 1)) {
    if (n % i === 0) {
      a.push([i, n / i], [-i, -n / i])
      if (i === -n/i) a.pop()
    }
  }
  return a
}

export function random(a: number, b?: number): number {
  if (!b) b = 0
  return Math.random() * (max(a, b) - min(a, b)) + min(a, b)
}

export function randomInt(a: number, b?: number): number {
  return Math.floor(random(a, b))
}

export function randomChoice(list: any[]): any {
  return list[randomInt(list.length)]
}