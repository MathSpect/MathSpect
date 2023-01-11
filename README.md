# MathSpect

A wholesome typescript mathematics library!

## Number Functions

```js
console.log(ms.factors(6)) // [ [ 1, 6 ], [ -1, -6 ], [ 2, 3 ], [ -2, -3 ] ]
console.log(ms.factors(4)) // [ [ 1, 4 ], [ -1, -4 ], [ 2, 2 ], [ -2, -2 ] ]
console.log(ms.factors(-1)) // [ [ 1, -1 ] ]
console.log(ms.factors(0)) // [ [] ]
```

## Random Functions

```js
console.log(ms.random(0, 1)) // b defaults to 0
console.log(ms.randomInt(1, 7)) // max number is exclusive
console.log(ms.randomChoice(['foo', 'bar', 'baz']))
```