function rowSumOddNumbers(n) {
  let first = (n -1) * n + 1
  console.log(first)
  let sum = 0

  for(let i = 0 ; i < n; i++){
      sum = sum + first + 2*i
  }

  return sum
}

console.log(rowSumOddNumbers(42))
