interface iMultiplesReturn {
  sum: number
  multiples: number[]
}


// Simply loops through all numbers and use filter to return only the numbers that are a multiple.
// I called it Brute since it involves a loop (which we can avoid)
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

// The below works because when you can have prior knowledge of all numerical variables you can normally
// work out a solution that invloves zero loops
// Lets work out the mental model for this with solving the sum of a gingle multiplier's values.
// Say our multiplier is 5 and our goal is 30
// the numbers we are looking to sum would be 5,10,15,20 & 25 (since in the task we only take numbers
// below the goal number)
// we know that each of these numbers will always relate to the multiplier and be a consistent sequence
// 5 = 1*5, 10 = 2*5, 15 = 3*5, 20 = 4*5, 25 = 5*5
// therefore:
// step1 => we devide the goal (-1 so that we don't include the goal) by the multiplier.
// This will always be the number of numbers we will need to sum
// step2 =>  we can algebraically reduce the sum logic.
// (5,10,15,20,25)
// is the same as (1x5, 2x5, 3x5, 4x5, 5x5)
// is the same as 5 x (1+2+3+4+5)
// (1+2+3+4+5) is the same as 5 * the median value of (1,2,3,4,5)
// so we end up with 5 * 5 * ((1+ 5) / 2)

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
