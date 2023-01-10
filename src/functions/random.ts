// Get a random number between a minimum and a maximum value

export function randomNumber(min: number, max: number, rounded: boolean) {
  const formula = Math.random() * (max - min) + min;
  return rounded ? Math.round(formula) : formula;
}
