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
