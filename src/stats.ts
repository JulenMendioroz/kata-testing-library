export function sum(numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr)
}

export function average(numbers: number[]) {
  return sum(numbers) / numbers.length
}
