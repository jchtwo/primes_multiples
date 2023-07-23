interface iMultiplesReturn {
  sum: number
  multiples: number[]
}

const bruteMultiples = (
  multiple1: number,
  multiple2: number,
  totalNums: number
): iMultiplesReturn => {
  const multiples = Array.from({ length: totalNums }, (num, index) => index).filter(
    (num) => num % multiple1 == 0 || num % multiple2 == 0
  )

  return {
    sum: multiples.reduce((acc, c) => acc + c),
    multiples
  }
}

const sumOneMultiple = (multiple: number, goal: number): number => {
  const timesMultiplied = Math.floor((goal - 1) / multiple)
  return multiple * timesMultiplied * ((1 + timesMultiplied) / 2)
}

const fastMultiples = (multiple1: number, multiple2: number, totalNums: number): number => {
  const first = sumOneMultiple(multiple1, totalNums)
  const second = sumOneMultiple(multiple2, totalNums)
  const duplicates = sumOneMultiple(multiple1 * multiple2, totalNums)
  if (multiple1 % multiple2 === 0 || multiple2 % multiple1 == 0) {
    return Math.max(first, second)
  } else {
    return first + second - duplicates
  }
}

export { bruteMultiples, fastMultiples }
