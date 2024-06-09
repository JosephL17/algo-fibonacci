function fibonacci(num) {
  // base cases
  if (num === 0) {
    return 0
  }

  else if (num == 1) {
    return 1
  }
  // recursive case
  else {
    return fibonacci(num -1) + fibonacci(num -2)
  }
}

console.log((fibonacci(0) == 0))
console.log((fibonacci(2) == 1))
console.log((fibonacci(5) == 5))
console.log((fibonacci(8) == 21))
console.log((fibonacci(11) == 89))

module.exports = fibonacci;
